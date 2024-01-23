import React, {useState,useEffect} from "react";
import "./styles.css";
import {Accordion} from "react-bootstrap"
import {DeleteOutlined,OrderedListOutlined, PlusOutlined,} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import axiosConfig from "../../../redux/baseUrl";


const Stipendiants = () => {

  const [yearData, setYearData] = useState()
  const [yearId, setYearId] = useState()
  const navigate = useNavigate()


  const getAllSeasen = () => {
    axiosConfig.get("/season").then(res => {
      console.log("year",res.data);
      setYearData(res.data)
    }).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    getAllSeasen()
  }, [])


  return (
    <div style={{marginTop:"200px"}} className="container">
    <div style={{padding:"0 30px",width:"100%",height:"100px",display:"flex",justifyContent:"center",fontSize:"30px",fontWeight:"600"}}>Stipendiantlar ro'yxati</div>
   <Accordion defaultActiveKey="0">
    {
      yearData?.map((item,index)=>(
        <Accordion.Item onClick={()=>sessionStorage.setItem("yearId", item._id)} eventKey={index}>
      <Accordion.Header>
        <div style={{width:"100%",display:"flex",justifyContent:"space-between",padding:"0 20px 0 0"}}>
          <div>{item.start + "/" + item.end + " yilgi stipendiantlar"}</div>
        </div>
        </Accordion.Header>
      <Accordion.Body>
      <h6>{item.child?.map((item,index)=>(
        <div key={index} style={{cursor:"pointer"}} onClick={()=>{sessionStorage.setItem("stipendNameId",item.id);navigate("/stipendiants/students")}}>{index+1}.{" "+item.title} <hr /></div>
        ))}</h6>
      </Accordion.Body>
    </Accordion.Item>
      ))
    }
    </Accordion>
  </div>
  );
};

export default Stipendiants;
