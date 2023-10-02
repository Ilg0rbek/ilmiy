import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Table } from "antd";
import React from "react";

const Students = () => {
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
      title: "Kursi",
      dataIndex: "kurs",
      key: "kurs",
    },
    {
      title: "Sozlanmalar",
      dataIndex: "",
      key: "x",
      render: () => (
        <a style={{ fontSize: "16px" }}>
          <EditOutlined style={{ marginRight: "20px", color: "green" }} />
          <DeleteOutlined style={{ marginRight: "20px", color: "red" }} />
        </a>
      ),
    },
  ];
  const data = [
    {
      key: 1,
      ism: "Abdumalikov",
      familya: "Ilg'robek",
      kurs: "4 - kurs",
      description:
        "My name is Abdumalikov Ilg'orbek, I am 23 years old, living in New York No. 1 Lake Park.",
    },
  ];

  return (
    <div>
      <div className="addNewYear">
        Stipendiyaga ega talaba qo'shish
        <PlusOutlined />
      </div>
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

export default Students;
