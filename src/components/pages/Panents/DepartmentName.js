import React from "react";
import { Card } from 'antd';
import { Link } from "react-router-dom";
const { Meta } = Card;

const DepartmenName = () =>{
    return(
        <div className="containers">
            <Link style={{
                    width: 240,
                }} className="shadow" to={`/stipendiants/${sessionStorage.getItem('routesHref')}/${1}`}>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://adu.uz/rasmlar/news/2021/main_photo-2023-04-26_11-02-10-Zulunova_Gulruxbonu_bobirmirzo_qizi_html_88fa3d5ad328259.jpg" />}
            >
                <Meta title="Bu yerda kafedralar ro'yhati" description="www.instagram.com" />
            </Card>
            </Link>
        </div>
    )
}

export default DepartmenName;