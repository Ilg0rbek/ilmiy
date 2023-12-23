import React from "react";
import { Link } from "react-router-dom";
import { Collapse, List } from "antd";
import { OrderedListOutlined } from "@ant-design/icons";
import Item from "antd/es/list/Item";


const years = [
    {
        id:"1",
        year:"2021",
        departmenName:"Filalogiya"
    },
    {
        id:"2",
        year:"2022",
        departmenName:"Filalogiya 1212"
    },
    {
        id:"3",
        year:"2023",
        departmenName:"Filalogiya 2323"
    }
]

const Patents = () =>{
    return(
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
       {
        years && years.map((item,index)=>(
            <Collapse.Panel header={item.year+" Fan to'garaklari"} key={index}>
            <List
              size="large"
              dataSource={years}
              renderItem={(item, idx) => (
                <List.Item onClick={()=>sessionStorage.setItem("routesHref",item.title)}>
                  <Link
                    to={item.title}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    {idx + 1}. <span >{item.departmenName}</span>
                  </Link>
                </List.Item>
              )}
            />
          </Collapse.Panel>
        ))
       }
      </Collapse>
        </div>
    )
}

export default Patents;