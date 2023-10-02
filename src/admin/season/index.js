import React, { useState } from "react";
import SeasonModal from "../modal/season.modal";
import {
  DeleteOutlined,
  EditOutlined,
  OrderedListOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import "./year.css";
import { Collapse, List } from "antd";
import { Link } from "react-router-dom";

const Season = () => {
  const showModal = () => {
    setIsModalOpen(true);
  };

  const data = [
    "Prezident stipendiyasi",
    "Navoiy nomli davlat stipendiyasi",
    "Islom Karimovich nomli davlat stipendiyasi",
    "Ulug'bek nomli davlat stipendiyasi",
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <SeasonModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div className="addNewYear" onClick={showModal}>
        Yangi o'quv yili hamda stipendiyalar turini qo'shish <PlusOutlined />
      </div>
      <div
        style={{
          display: "flex",
          position: "relative",
          marginBottom: "8px",
        }}
      >
        <Collapse
          style={{
            userSelect: "none",
            border: "none",
            backgroundColor: "#f4f4f4f4",
            width: "100%",
          }}
          expandIcon={() => <OrderedListOutlined />}
        >
          <Collapse.Panel
            header="2022 / 2023 yilgi stipendiat talabalar"
            key="1"
          >
            <List
              size="large"
              dataSource={data}
              renderItem={(item, idx) => (
                <List.Item>
                  <Link
                    to={"/admin/stipendiants/user-list"}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    {idx + 1}. {item}
                  </Link>
                </List.Item>
              )}
            />
          </Collapse.Panel>
        </Collapse>
        <div
          style={{
            position: "absolute",
            right: "20px",
            top: "12px",
            fontSize: "16px",
          }}
        >
          <EditOutlined
            style={{
              marginRight: "10px",
              cursor: "pointer",
              color: "green",
            }}
          />
          <DeleteOutlined
            style={{
              cursor: "pointer",
              color: "red",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Season;
