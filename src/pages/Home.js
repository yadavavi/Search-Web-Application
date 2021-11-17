import React from "react";
import { Typography } from "antd";

import ProductTypeCard from "../components/ProductTypeCard/ProductTypeCard";

const { Title } = Typography;

const Home = (props) => {
  return (
    <div>
      <Title level={3}>Browse by Product Type</Title>
      <ProductTypeCard
        check={props.check}
        setCheck={props.setCheck}
        onFilterHandler={props.onFilterHandler}
      />
    </div>
  );
};

export default Home;
