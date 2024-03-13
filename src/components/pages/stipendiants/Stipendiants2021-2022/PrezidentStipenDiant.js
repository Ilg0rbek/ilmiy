/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Card } from 'antd';
import { Link } from "react-router-dom";
import axiosConfig from "../../../../redux/baseUrl";
const { Meta } = Card;

const PresidentStipendiant = () => {

    const [data, setData] = useState([])
    let season = sessionStorage.getItem("yearId")
    let stipend = sessionStorage.getItem("stipendNameId")
    const getAllStipend = () => {
        axiosConfig.post("/students/user", {season}).then(res => {
            console.log("mana res", res.data);
            setData(res.data)
        }).catch(err => {
            console.log(err);
        })
    }


    useEffect(() => {
        getAllStipend()
    }, [])

    return (
        <div style={{ marginTop: "200px" }} className="container">
            <h3 style={{ textAlign: "center" }}>Stipendiatlar ro'yxati</h3>
            <div className="row">
                {
                    data?.map((item, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mt-3 mb-3">
                            <Link onClick={()=>sessionStorage.setItem("stipendiaNomi",item.stipend)} style={{
                                width: 240,
                            }} className="shadow" to={`/stipendiants/students/detail/${item.id}`}>
                                <Card
                                    hoverable
                                    style={{
                                        width: 240,
                                    }}
                                    cover={<img alt="example" src={`https://ilmiyapi.adu.uz/${item.image}`} />}
                                >
                                    <h5 className="mb-2" style={{textAligin:"center", textDecoration:"none"}}>{item.fullname} </h5>
                                    <h6  style={{textAligin:"center", textDecoration:"none"}}>{item.stipend} </h6>
                                    {/* <Meta className="mb-2" style={{ textDecoration: "none" }} /> */}
                                    {/* <Meta style={{ textDecoration: "none" }} title={item.stipend} /> */}
                                </Card>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PresidentStipendiant