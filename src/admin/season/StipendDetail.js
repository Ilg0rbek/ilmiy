import React, { useEffect, useState } from "react";
import axiosConfig from "../../redux/baseUrl";
import { useParams } from "react-router-dom";
import { SearchOutlined ,PlusOutlined,DeleteOutlined,EyeOutlined} from '@ant-design/icons';
import StipendYutuqModal from "../modal/Stipend.yutuq.modal";

const StipendDetail = () =>{
    const {id} = useParams()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [detailData, setDetailData] = useState()

  const getDeteil = () =>{
    axiosConfig.get(`/students/${id}`).then(res=>{
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
        <div className="table container mb-4">
            <div className="addNewYear" onClick={showModal}>
                Stipendiantlarni yutuqlarini qo'shish <PlusOutlined />
            </div>
            <StipendYutuqModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <div style={{ border: "none" }} className="card shadow">
                <img style={{width:"400px",height:"400px",borderRadius:"50%"}} src={`https://ilmiyapi.adu.uz/${detailData && detailData.image}`} alt="" />
                <div className="card-body">
                    <h4 className="text-center">{detailData && detailData.fullname}</h4>
                </div>
            </div>
        </div>
        {
            detailData?.child?.map((item, index)=>(
        <div className="row mt-5">
            <div style={{display:"flex",justifyContent:"center"}} className="col-12">
                <img src={`https://ilmiyapi.adu.uz/${item.image}`} alt="" />
            </div>
            <div className="col-12">
                {item.title}
            </div>
        </div>
            ))
        }
    </div>
    )
}

export default StipendDetail;