import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { Collapse, List } from "antd";
import { OrderedListOutlined } from "@ant-design/icons";

const Stipendiants = () => {
  const data = [
    "Prezident stipendiyasi",
    "Navoiy nomli davlat stipendiyasi",
    "Islom Karimovich nomli davlat stipendiyasi",
    "Ulug'bek nomli davlat stipendiyasi",
  ];

  return (
    <div className="container">
      <Collapse
        style={{
          userSelect: "none",
          border: "none",
          backgroundColor: "#f4f4f4f4",
          width: "100%",
        }}
        expandIcon={() => <OrderedListOutlined />}
      >
        <Collapse.Panel header="2022 / 2023 yilgi stipendiat talabalar" key="1">
          <List
            size="large"
            dataSource={data}
            renderItem={(item, idx) => (
              <List.Item>
                <Link
                  to={"/grands"}
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
    </div>
  );
};

export default Stipendiants;
