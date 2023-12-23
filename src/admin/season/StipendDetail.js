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
  },[])

  const showModal = () => {
    setIsModalOpen(true);
    console.log("salom");
  };

    return(
        <div className=" container mb-4">
            <div className="addNewYear" onClick={showModal}>
                Stipendiantlarni qo'shish <PlusOutlined />
            </div>
            <StipendYutuqModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <div style={{ border: "none" }} className="card shadow">
                <img style={{width:"500px",height:"400px"}} src={`http://localhost:8080/${detailData && detailData.image}`} alt="" />
                <div className="card-body">
                    <h4 className="text-center">{detailData && detailData.fullname}</h4>
                </div>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-12">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis deserunt
                non eligendi praesentium repellat, error inventore magni sapiente nesciunt
                corrupti doloribus obcaecati quam velit, nobis eaque recusandae quae, repudiandae
                placeat et? Iusto delectus consequatur non, dolorum eligendi minus reprehenderit
                aliquid, quos eveniet, rerum ab necessitatibus exercitationem nostrum atque enim repellendus.
            </div>
        </div>
    </div>
    )
}

export default StipendDetail;