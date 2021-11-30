import React, { Fragment } from "react";
import { Card, Checkbox, Typography } from "antd";

const { Title } = Typography;

const CheckBox = ({ onFilterHandler, check, setCheck, entryAttr, params, setParams }) => {
  const handleToggle = (value,key) => {
    const currentIndex = check[key].indexOf(value);
    
    const newChecked = { ...check };
    const newParams = { ...params };

    if (currentIndex === -1) {
      newChecked[key] = [...newChecked[key], value];
    } else {
      newChecked[key].splice(currentIndex, 1);
    }
    
  let filterName =   entryAttr[key].filter(g => newChecked[key].includes(g._id)).map(g => g.name)
  newParams[key] = filterName;
  setParams(newParams);
    setCheck(newChecked);

    onFilterHandler(newChecked);
  };

  const renderProductTypeCheckboxLists = () =>
    entryAttr.productType &&
    entryAttr.productType.map((value, index) => (
      <Fragment key={index}>
        <Checkbox
          onChange={() => handleToggle(value._id, "productType")}
          type="checkbox"
          checked={
            check["productType"].indexOf(value._id) === -1 ? false : true
          }
        />
        &nbsp;&nbsp;
        <span>{value.name}</span>
        <br />
      </Fragment>
    ));

  const renderStatusCheckboxLists = () =>
    entryAttr.status &&
    entryAttr.status.map((value, index) => (
      <Fragment key={index}>
        <Checkbox
          name="status"
          onChange={() => handleToggle(value._id, "status")}
          type="checkbox"
          checked={check["status"].indexOf(value._id) === -1 ? false : true}
        />
        &nbsp;&nbsp;
        <span>{value.name}</span>
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
