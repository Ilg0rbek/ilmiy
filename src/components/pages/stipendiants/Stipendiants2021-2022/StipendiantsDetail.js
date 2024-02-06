import React, { useState, useEffect } from "react";
import "../../stipendiants/styles.css"
import { useParams } from "react-router-dom";
import axiosConfig from "../../../../redux/baseUrl";

const StipendiantDeatail = () => {


    const { id } = useParams()
    const [detailData, setDetailData] = useState()

    const getDeteil = () => {
        axiosConfig.get(`/students/${id}`).then(res => {
            console.log(res.data);
            setDetailData(res.data)
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getDeteil()
    }, [])
    let stipendiaNomi = sessionStorage.getItem("stipendiaNomi")

    return (
        <div style={{ marginTop: "200px" }} className=" container mb-4">
            <div style={{ padding: "0 30px", width: "100%", height: "100px", display: "flex", justifyContent: "center", fontSize: "30px", fontWeight: "600" }}>Stipendiat haqida to'liq ma'lumot</div>
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <div style={{ border: "none",padding:"0 20px 20px 20px" }} className="card shadow">
                <div className="mt-3" style={{display:"flex",justifyContent:"center"}}>
                <img className="img-fluid" style={{width:"400px",height:"400px"}} src={`https://ilmiyapi.adu.uz/${detailData && detailData.image}`} alt="" />
                </div>
                <div className="card-body" style={{padding:"0 15px"}}>
                    <h4 className="text-center mt-3">{stipendiaNomi}</h4>
                    <h5 className="text-center mt-3">{detailData && detailData.fullname}</h5>
                </div>
                <div>
               <b > {detailData && detailData.desc}</b>
                </div>
            </div>
        </div>
        {
            detailData?.child?.map((item, index)=>(
        <div className="row mt-5">
            <div style={{display:"flex",justifyContent:"center"}} className="col-12">
                <img className="img-fluid" src={`https://ilmiyapi.adu.uz/${item.image}`} alt="" />
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

export default StipendiantDeatail