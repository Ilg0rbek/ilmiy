import React from "react";
import { Table } from "antd";
import "./styles.css";

const GrandPage = () => {
  const columns = [
    {
      title: "Ismi",
      dataIndex: "ism",
      key: "ism",
    },
    {
      title: "Familyasi",
      dataIndex: "familya",
      key: "familya",
    },
    {
      title: "Guruhi",
      dataIndex: "guruh",
      key: "guruh",
    },
  ];
  const data = [
    {
      key: 1,
      ism: "Abdumalikov",
      familya: "Ilg'robek",
      guruh: "4 - kurs",
      description:
        "My name is Abdumalikov Ilg'orbek, I am 23 years old, living in New York No. 1 Lake Park.",
    },
  ];

  return (
    <div className="container">
      <Table
        columns={columns}
        pagination={false}
        expandable={{
          expandedRowRender: (record) => (
            <p
              style={{
                margin: 0,
              }}
            >
              {record.description}
            </p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={data}
      />
    </div>
  );
};

export default GrandPage;
