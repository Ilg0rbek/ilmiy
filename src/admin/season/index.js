import React, { useState } from "react";
import SeasonModal from "../modal/season.modal";
import {DeleteOutlined,OrderedListOutlined, PlusOutlined,} from "@ant-design/icons";
import "./year.css";
import { Collapse, List } from "antd";
import { Link, useNavigate } from "react-router-dom";
import StipendiaName from "../modal/StipendiaName.modal";
import axiosConfig from "../../redux/baseUrl";
import { useEffect } from "react";
import {Accordion} from "react-bootstrap"

const Season = () => {

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const showModal2 = () => {
    setIsModalOpen2(true);
  };

  const data = [
    "Prezident stipendiyasi",
    "Navoiy nomli davlat stipendiyasi",
    "Islom Karimovich nomli davlat stipendiyasi",
    "Ulug'bek nomli davlat stipendiyasi",
  ];

  const [yearData, setYearData] = useState()
  const [stipendName, setStipendName] = useState()
  const [yearId, setYearId] = useState()
  const navigate = useNavigate()

  const deleteYear = (id) =>{
    axiosConfig.delete(`/season/delete/${id}`).then(res=>{
      // console.log(res);
      getAllSeasen()
    }).catch(err=>{
      console.log(err);
    })
  }

  const getAllSeasen = () => {
    axiosConfig.get(`/season`).then(res => {
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

 

  return (
    <div>
      <SeasonModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <StipendiaName yearId={yearId} isModalOpen2={isModalOpen2} setIsModalOpen2={setIsModalOpen2} />
      <div className="addNewYear" onClick={showModal}>
        Yangi o'quv yili hamda stipendiyalar turini qo'shish <PlusOutlined />
      </div>
      <Accordion defaultActiveKey="0">
      {
        yearData?.map((item,index)=>(
          <Accordion.Item onClick={()=>sessionStorage.setItem("yearId", item._id)} eventKey={index}>
        <Accordion.Header>
          <div style={{width:"100%",display:"flex",justifyContent:"space-between",padding:"0 20px 0 0"}}>
            <div>{item.start + "/" + item.end + " yilgi stipendiantlar"}</div>
            <div >
          <PlusOutlined
            onClick={()=>{setYearId(item._id);showModal2()}}
            style={{
              marginRight: "10px",
              cursor: "pointer",
              color: "green",
            }} />
          {/* <EditOutlined
            style={{
              marginRight: "10px",
              cursor: "pointer",
              color: "green",
            }}
          /> */}
          <DeleteOutlined
          onClick={()=>deleteYear(item._id)}
            style={{
              cursor: "pointer",
              color: "red",
            }}
          />
        </div>
          </div>
          </Accordion.Header>
        <Accordion.Body>
        <h6>{item.child?.map((item,index)=>(
          <div key={index} style={{cursor:"pointer"}} onClick={()=>{sessionStorage.setItem("stipendNameId",item.id);navigate("/admin/stipendiants/all-stipends")}}>{index+1}.{" "+item.title} <hr /></div>
          ))}</h6>
        </Accordion.Body>
      </Accordion.Item>
        ))
      }
      </Accordion>
    </div>
  );
};

export default Season;
