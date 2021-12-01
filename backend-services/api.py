from flask import Flask
from flask import request, jsonify
from flaskext.mysql import MySQL
from flask_cors import CORS,cross_origin

app = Flask(__name__)
CORS(app)

# make mysql connection
# TO-DO : read from .env file
mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'li0n12#'
app.config['MYSQL_DATABASE_DB'] = 'web_search'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)

# global variables
all_product_types = [1,2,3,4,5]
all_status_types = [1,2]
# status_mapping = {1:"Active",2:"Inactive"}
# product_mapping = {1:"Foam",2:"Adhesive",3:"Film",4:"Rubber Sheet",5:"Genderfluid"}

def format_data(data):
	res = []
	for d in data:
		try:
			r = {}
			r['material_name'] = d[0]
			r['marker_poduct_status'] = d[1]
			r['product_type'] = d[2]
			r['description'] = d[3]
			res.append(r)
		except Exception as e:
			print(e)
	return res


@app.route('/product/getProducts', methods=['POST'])
# @cross_origin(origin='*')
def fetch():
	try:
		content = request.get_json()
		# parse the post parameters
		search_term = content.get('searchTerm',"")
		product_type = all_product_types
		try:
			product_type = content['filters']['productType'] if len(content['filters']['productType']) else all_product_types
		except:
			pass
		status = all_status_types
		try:
			status = content['filters']['status'] if len(content['filters']['status']) else all_status_types
		except:
			pass
		# cursor takes set
		status_q = set(status)
		type_q = set(product_type)
		# make connection
		conn = mysql.connect()
		cursor = conn.cursor()
		# search terms is present, apply wildcard query
		if search_term and len(search_term.strip())>2:
			# remove whitespaces and add wildcard characters
			search_term = search_term.strip()
			wildcard_q = "%"+search_term+"%"
			# wildcard query
			query = """Select items.name,item_status.status_name,item_type.name,items.description from items
			LEFT JOIN item_status ON items.status = item_status.status_type
			LEFT JOIN item_type ON items.type = item_type.type
			WHERE items.name LIKE %s AND items.status in %s AND items.type in %s"""
			cursor.execute(query,(wildcard_q, status_q, type_q,))
		else:
			query = """Select items.name,item_status.status_name,item_type.name,items.description from items
			LEFT JOIN item_status ON items.status = item_status.status_type
			LEFT JOIN item_type ON items.type = item_type.type
			WHERE items.status in %s AND items.type in %s"""
			cursor.execute(query,(status_q, type_q,))
		# fetch data from the database
		data = cursor.fetchall()
		# format data
		result = format_data(data)
		response = {"success":True,"products":result}
	except Exception as e:
		response = {"success":False,"msg":str(e)}
	return jsonify(response)


if __name__ == '__main__':
	app.run(host='0.0.0.0',debug=True,port=9898)