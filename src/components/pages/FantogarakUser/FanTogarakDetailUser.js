import React, { useEffect, useState } from "react";
import axiosConfig from "../../../redux/baseUrl";
import { useParams } from "react-router-dom";
import { SearchOutlined ,PlusOutlined,DeleteOutlined,EyeOutlined} from '@ant-design/icons';

const FanTogarakDetailUser = () =>{
    const {id} = useParams()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [detailData, setDetailData] = useState()
    let science_id = sessionStorage.getItem("FacultyId")

  const getDeteil = () =>{
    axiosConfig.get(`/sciences/${science_id}`).then(res=>{
        console.log("detail",res.data);
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
        <div style={{marginTop:"200px"}} className="container mb-4">
        {
            detailData?.map((item, index)=>(
        <div key={index} className="row mt-5">
             <h4 className="text-center">{sessionStorage.getItem("togarakName")} to'garagi</h4>
            <div  style={{display:"flex",justifyContent:"center"}} className="col-12 mt-3">
                <img className="img-fluid" src={`https://ilmiyapi.adu.uz/${item.image}`} alt="To'garak rasmida hatolik" />
            </div>
            <div style={{marginTop:"15px"}} className="col-12">
                <h4 style={{marginTop:"15px"}} className="text-center">{item.title == "undefined" ? "" : item.title}</h4>
            </div>
            <div className="col-12">
               <b style={{marginTop:"15px"}}>{item.desc ? item.desc : ""}</b>
            </div>
        </div>
            ))
        }
    </div>
    )
}

export default FanTogarakDetailUser;