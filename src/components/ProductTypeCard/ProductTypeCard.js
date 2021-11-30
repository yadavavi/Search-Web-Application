import React from "react";
import { Card, Col, Row, Typography } from "antd";

import { Link } from "react-router-dom";

const { Title } = Typography;

const ProductTypeCard = ({ check, setCheck, onFilterHandler,params, setParams, entryAttr }) => {
  const clickHandler = (value,name) => {
    const newChecked = { ...check };
    const newParams = { ...params}
    let val = value;
    newChecked["productType"] = [val];
    newChecked["status"] = [];
    newParams["productType"] = [name];
    newParams["status"] = [];

    setCheck(newChecked);
    onFilterHandler(newChecked);
    setParams(newParams);
  };
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {entryAttr.productType.map((val, index) => (
          <Col span={6} key={index}>
            <Link to="/result">
              <Card
                onClick={() => clickHandler(val._id, val.name)}
                style={{ height: 150 }}
                bodyStyle={{ textAlign: "center", padding: 55 }}
              >
                <Title level={4}> {val.name}</Title>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductTypeCard;
