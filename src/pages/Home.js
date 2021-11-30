import React from "react";
import { Typography } from "antd";

import ProductTypeCard from "../components/ProductTypeCard/ProductTypeCard";

const { Title } = Typography;

const Home = ({check, setCheck, onFilterHandler, entryAttr,params, setParams}) => {
  return (
    <div>
      <Title level={3}>Browse by Product Type</Title>
      <ProductTypeCard
        check={check}
        setCheck={setCheck}
        onFilterHandler={onFilterHandler}
        params={params}
        setParams={setParams}
        entryAttr={entryAttr}
      />
    </div>
  );
};

export default Home;
