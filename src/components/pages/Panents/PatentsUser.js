import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Collapse, List } from "antd";
import { OrderedListOutlined } from "@ant-design/icons";
import Item from "antd/es/list/Item";
import axiosConfig from "../../../redux/baseUrl";



const PatentsUser = () => {

  const [yearData, setYearData] = useState()
  const navigate = useNavigate()

  const getYearPatent = () => {
    axiosConfig.get("/patents").then(res => {
      console.log(res);
      setYearData(res.data)
    }).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    getYearPatent()
  }, [])

  return (
    <div className="container-fluid" style={{ marginTop: "200px" }}>
      <div style={{padding:"0 30px",width:"100%",height:"100px",display:"flex",justifyContent:"center",fontSize:"30px",fontWeight:"600"}}>Guvohnomalar ro'yxati</div>
      <div  className="container">
        {
          yearData?.map((item, index) => (
            <div className="crad">
              {
                item != "" && (<div style={{ cursor: "pointer" }} onClick={() => { sessionStorage.setItem("patentId", item); navigate("/guvohnoma/user-list") }} className="card-header">
                  <h6>{item} - yilgi guvohnomalar</h6><hr />
                </div>)
              }
            </div>
          ))
        }
    </div>
    </div>
  )
}

export default PatentsUser;