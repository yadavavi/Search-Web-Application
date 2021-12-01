import unittest,json

from api import app

class FlaskTest(unittest.TestCase):

	def test_index(self):
		tester = app.test_client(self)
		response = tester.get('/')
		self.assertEqual(response.status_code, 200)

	def test_fetch(self):
		tester = app.test_client(self)
		response = tester.post('/product/getProducts',data={})
		self.assertEqual(response.status_code, 201)

	def test_fetch_content_type(self):
		tester = app.test_client(self)
		response = tester.post('/product/getProducts',data={})
		self.assertEqual(response.content_type, 'application/json')

	def test_fetch_invalid_request(self):
		tester = app.test_client(self)
		response = tester.post('/product/getProducts',data=json.dumps(dict(invalid_param = 'test')))
		json_data = json.loads(response.data.decode("utf-8") )
		self.assertEqual(json_data['success'], False)

	def test_fetch_success(self):
		tester = app.test_client(self)
		response = tester.post('/product/getProducts',data=json.dumps(dict(searchTerm = '')), content_type='application/json')
		json_data = json.loads(response.data.decode("utf-8") )
		self.assertEqual(json_data['success'], True)

	def test_fetch_invalid_key(self):
		tester = app.test_client(self)
		response = tester.post('/product/getProducts',data=json.dumps(dict(invalid_param = 'test')), content_type='application/json')
		json_data = json.loads(response.data.decode("utf-8") )
		self.assertEqual(json_data['success'], True)

	def test_fetch_success_count(self):
		tester = app.test_client(self)
		response = tester.post('/product/getProducts',data=json.dumps(dict(searchTerm = '')), content_type='application/json')
		json_data = json.loads(response.data.decode("utf-8") )
		self.assertEqual(len(json_data['products']), 100)




if __name__ == '__main__':
	unittest.main()