import React, { Fragment } from "react";
import { Card, Checkbox, Typography } from "antd";

import { entryAttr } from "../../../assets/filter";

const { Title } = Typography;

const CheckBox = ({ onFilterHandler, check, setCheck }) => {
  const handleToggle = (value, key) => {
    const currentIndex = check[key].indexOf(value);
    const newChecked = { ...check };

    if (currentIndex === -1) {
      newChecked[key] = [...newChecked[key], value];
    } else {
      newChecked[key].splice(currentIndex, 1);
    }

    setCheck(newChecked);
    onFilterHandler(newChecked);
  };

  const renderProductTypeCheckboxLists = () =>
    entryAttr.productType &&
    entryAttr.productType.map((value, index) => (
      <Fragment key={index}>
        <Checkbox
          onChange={() => handleToggle(value, "productType")}
          type="checkbox"
          checked={check["productType"].indexOf(value) === -1 ? false : true}
        />
        &nbsp;&nbsp;
        <span>{value}</span>
        <br />
      </Fragment>
    ));

  const renderStatusCheckboxLists = () =>
    entryAttr.productStatus &&
    entryAttr.productStatus.map((value, index) => (
      <Fragment key={index}>
        <Checkbox
          name="status"
          onChange={() => handleToggle(value, "status")}
          type="checkbox"
          checked={check["status"].indexOf(value) === -1 ? false : true}
        />
        &nbsp;&nbsp;
        <span>{value}</span>
        <br />
      </Fragment>
    ));

  return (
    <Card style={{ width: 250 }}>
      <Title level={5}>Product Type</Title>

      {renderProductTypeCheckboxLists()}
      <br />

      <Title level={5}>Maker Product Status</Title>

      {renderStatusCheckboxLists()}
    </Card>
  );
};

export default CheckBox;
