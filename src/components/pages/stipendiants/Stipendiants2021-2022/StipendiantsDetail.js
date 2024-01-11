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

    return (
        <div style={{ marginTop: "200px" }} className=" container mb-4">
            <div style={{ padding: "0 30px", width: "100%", height: "100px", display: "flex", justifyContent: "center", fontSize: "30px", fontWeight: "600" }}>Stipendiant haqida to'liq ma'lumot</div>
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <div style={{ border: "none" }} className="card shadow">
                    <img style={{ width: "400px", height: "400px", borderRadius: "50%" }} src={`https://ilmiyapi.adu.uz/${detailData && detailData.image}`} alt="" />
                    <div className="card-body">
                        <h4 className="text-center">{detailData && detailData.fullname}</h4>
                    </div>
                </div>
            </div>
            {
                detailData?.child?.map((item, index) => (
                    <div className="row mt-5">
                        <div style={{ display: "flex", justifyContent: "center" }} className="col-12">
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

export default StipendiantDeatail