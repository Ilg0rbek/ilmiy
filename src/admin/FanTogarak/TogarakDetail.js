import React, { useEffect, useState } from "react";
import axiosConfig from "../../redux/baseUrl";
import { useParams } from "react-router-dom";
import { SearchOutlined ,PlusOutlined,DeleteOutlined,EyeOutlined} from '@ant-design/icons';
import StipendYutuqModal from "../modal/Stipend.yutuq.modal";
import TogarakDetailadd from "./TogarakDetail.add";

const TogarakDetail = () =>{
    const {id} = useParams()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [detailData, setDetailData] = useState()
    let science_id = sessionStorage.getItem("togarakId")

  const getDeteil = () =>{
    axiosConfig.get(`/sciences/${science_id}`).then(res=>{
        console.log(res.data);
        setDetailData(res.data)
    }).catch(err=>{
        console.log(err);
    })
  }

  useEffect(()=>{
    getDeteil()
  },[isModalOpen])

  const showModal = () => {
    setIsModalOpen(true);
    console.log("salom");
  };

    return(
        <div  className="container mb-4">
            <div className="addNewYear" onClick={showModal}>
            To'garak amaliyotini qo'shish <PlusOutlined />
            </div>
            <TogarakDetailadd isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        {
            detailData?.map((item, index)=>(
        <div className="row mt-5">
             <h4 className="text-center">{item.title}</h4>
            <div style={{display:"flex",justifyContent:"center"}} className="col-12 mt-3">
                <img className="img-fluid" src={`https://ilmiyapi.adu.uz/${item.image}`} alt="" />
            </div>
            <div className="col-12">
                <h4 className="mt-3">{item.title}</h4>
            </div>
            <div className="col-12">
                <b className="col-12">{item.desc}</b>
            </div>
        </div>
            ))
        }
    </div>
    )
}

export default TogarakDetail;