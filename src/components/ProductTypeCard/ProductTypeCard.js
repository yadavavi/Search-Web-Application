import React from "react";
import { Card, Col, Row, Typography } from "antd";

import { Link } from "react-router-dom";

const { Title } = Typography;

const ProductTypeCard = ({ check, setCheck, onFilterHandler, entryAttr }) => {
  const clickHandler = (value) => {
    const newChecked = { ...check };
    let val = value;
    newChecked["productType"] = [val];
    newChecked["status"] = [];
    setCheck(newChecked);
    onFilterHandler(newChecked);
  };
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {entryAttr.productType.map((val, index) => (
          <Col span={6} key={index}>
            <Link to="/result">
              <Card
                onClick={() => clickHandler(val)}
                style={{ height: 150 }}
                bodyStyle={{ textAlign: "center", padding: 55 }}
              >
                <Title level={4}> {val}</Title>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductTypeCard;
