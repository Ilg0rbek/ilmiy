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
        axiosConfig.post("/students", { season, stipend }).then(res => {
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
        <div className="containers container">
            {
                data?.map((item, index) => (
                    <Link key={index} style={{
                        width: 240,
                    }} className="shadow" to={`/stipendiants/students/detail/${item._id}`}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src={`https://ilmiyapi.adu.uz/${item.image}`} />}
                        >
                            <Meta style={{textDecoration:"none"}} title={item.fullname} />
                        </Card>
                    </Link>
                ))
            }

        </div>
    )
}

export default PresidentStipendiant