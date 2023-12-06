import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { Collapse, List } from "antd";
import { OrderedListOutlined } from "@ant-design/icons";
import Routes20212022 from "./StipendiantsRoutes";


const Stipendiants = () => {
  const data20222023 = [
    "Prezident stipendiyasi",
    "Navoiy nomli davlat stipendiyasi",
    "Islom Karimovich nomli davlat stipendiyasi",
    "Ulug'bek nomli davlat stipendiyasi",
  ];
  const data20232024 = [
    "Prezident stipendiyasi",
    "Navoiy nomli davlat stipendiyasi",
    "Islom Karimovich nomli davlat stipendiyasi",
    "Ulug'bek nomli davlat stipendiyasi",
    "Zahiriddin Muhammad Bobur stipendiyasi"
  ];

  // const uquvYili = [
  //   {}
  // ]


  return (
    <div className="containers container">
      <Collapse
        style={{
          userSelect: "none",
          border: "none",
          backgroundColor: "#f4f4f4f4",
          width: "100%",
        }}
        expandIcon={() => <OrderedListOutlined />}
      >
        <Collapse.Panel header="2021 / 2022 yilgi stipendiat talabalar" key="1">
          <List
            size="large"
            dataSource={Routes20212022}
            renderItem={(item, idx) => (
              <List.Item>
                <Link
                  to={item.name}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  {idx + 1}. <div onClick={()=>sessionStorage.setItem("routesHref",item.name)}>{item.title}</div>
                </Link>
              </List.Item>
            )}
          />
        </Collapse.Panel>
        <Collapse.Panel header="2022 / 2023 yilgi stipendiat talabalar" key="2">
          <List
            size="large"
            dataSource={data20222023}
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
        <Collapse.Panel header="2023 / 2024 yilgi stipendiat talabalar" key="3">
          <List
            size="large"
            dataSource={data20232024}
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
