import React, { useState } from "react";
import SeasonModal from "../modal/season.modal";
import { DeleteOutlined, OrderedListOutlined, PlusOutlined, } from "@ant-design/icons";
import { Collapse, List } from "antd";
import { Link, useNavigate } from "react-router-dom";
// import StipendiaName from "../modal/StipendiaName.modal";
import axiosConfig from "../../redux/baseUrl";
import { useEffect } from "react";
import { Accordion } from "react-bootstrap"
import FanTogarrakAdd from "../FanTogarak/FanTogarak.Add.modal";
import FanTogarakFakultetNomiAdd from "../FanTogarak/FanTogarakFakultetNomiAdd";
import AddAdminGuvohnomaYear from "./AddAdminGuvohnomaYear";

const AdminGuvohnama = () => {

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



    const getAllSeasen = () => {
        axiosConfig.get("/guvohnoma").then(res => {
            console.log("year", res.data);
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
    }, [isModalOpen, isModalOpen2])


    return (
        <div>
            <div className="addNewYear" onClick={showModal}>
                Patentlar yilini qo'shish <PlusOutlined />
            </div>
            <AddAdminGuvohnomaYear isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <div className="table">
                {
                    yearData?.map((item, index) => (
                        <div className="crad">
                            {
                                item != "" && (<div style={{ cursor: "pointer" }} onClick={() => { sessionStorage.setItem("guvohnomaId", item); navigate("/admin/guvohnoma/list") }} className="card-header">
                                    <h6>{item}-chi yilgi patentlar</h6><hr />
                                </div>)
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AdminGuvohnama;