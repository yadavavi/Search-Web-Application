import React from "react";
import { Table } from "antd";

import classes from "./Section.module.css";

const onChange = (sorter) => {};

const columns = [
  {
    title: "Material Name",
    width: 150,
    dataIndex: "material_name",
    key: "material_name",
    fixed: "left",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.material_name.localeCompare(b.material_name),
  },
  {
    title: "Product Type",
    width: 100,
    dataIndex: "product_type",
    key: "product_type",
    fixed: "left",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.product_type.localeCompare(b.product_type),
  },
  {
    title: " Desscription",
    dataIndex: "description",
    key: "description",
    width: 150,
  },
  {
    title: "Maker Product Status",
    dataIndex: "marker_poduct_status",
    key: "marker_poduct_status",
    width: 80,
  },
];
const TableView = ({ recordList }) => {
  return (
    <Table
      rowKey="material_name"
      className={classes.tableView}
      columns={columns}
      dataSource={recordList}
      pagination={{ defaultPageSize: 5 }}
      scroll={{ y: 400 }}
      onChange={onChange}
      showSorterTooltip={false}
      sticky
    />
  );
};
export default TableView;
