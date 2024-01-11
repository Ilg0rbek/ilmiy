import React, { useState } from "react";
import {DeleteOutlined,OrderedListOutlined, PlusOutlined,} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import axiosConfig from "../../../redux/baseUrl";
import { useEffect } from "react";
import {Accordion} from "react-bootstrap"


const FanTogarakUser = () =>{

    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const showModal2 = () => {
      setIsModalOpen2(true);
    };
  
  
    const [yearData, setYearData] = useState()
    const [stipendName, setStipendName] = useState()
    const [yearId, setYearId] = useState()
    const navigate = useNavigate()
  
    const deleteYear = (id) =>{
      axiosConfig.delete(`/science/${id}`).then(res=>{
        // console.log(res);
        getAllSeasen()
      }).catch(err=>{
        console.log(err);
      })
    }
  
    const getAllSeasen = () => {
      axiosConfig.get(`/science`).then(res => {
        console.log("year",res.data);
        setYearData(res.data)
      }).catch(err => {
        console.log(err);
      })
    }
  
    // const getStipendName = (id) =>{
    //   axiosConfig.get(`/stipend/${id}`).then(res=>{
    //     console.log(res.data);
    //     setStipendName(res.data)
    //   }).catch(err=>{
    //     console.log(err);
    //   })
    // }
  
    useEffect(() => {
      getAllSeasen()
    }, [isModalOpen,isModalOpen2])


    return(
        <div className="container" style={{marginTop:"200px"}}>
            <div style={{padding:"0 30px",width:"100%",height:"100px",display:"flex",justifyContent:"center",fontSize:"30px",fontWeight:"600"}}>Fan to'garak fakultetlarini ro'yxati</div>
        <Accordion defaultActiveKey="0">
        {
          yearData != "" ?
          yearData?.map((item,index)=>(
            <Accordion.Item onClick={()=>sessionStorage.setItem("yearId", item._id)} eventKey={index}>
          <Accordion.Header>
            <div style={{width:"100%",display:"flex",justifyContent:"space-between",padding:"0 20px 0 0"}}>
              <div>{item.start + "/" + item.end + " yilgi fan to'garaklar"}</div>
            </div>
            </Accordion.Header>
          <Accordion.Body>
          <h6>{item.child?.map((item,index)=>(
            <div key={index} style={{cursor:"pointer"}} onClick={()=>{sessionStorage.setItem("FacultyId",item.id);navigate("/cources/kafedra")}}>{index+1}.{" "+item.title} <hr /></div>
            ))}</h6>
          </Accordion.Body>
        </Accordion.Item>
          ))
          :
          <div style={{padding:"0 30px",width:"100%",height:"100px",display:"flex",fontSize:"30px",fontWeight:"600"}}>To'garaklar mavjud emas</div>
        }
        </Accordion>
      </div>
    )
}

export default FanTogarakUser;