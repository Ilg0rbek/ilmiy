import React from "react";
import { Card } from 'antd';
import { Link } from "react-router-dom";
const { Meta } = Card;

const PresidentStipendiant = () => {
    return (
        <div className="containers container">
            <Link>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://adu.uz/rasmlar/news/2021/main_photo-2023-04-26_11-02-10-Zulunova_Gulruxbonu_bobirmirzo_qizi_html_88fa3d5ad328259.jpg" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            </Link>
        </div>
    )
}

export default PresidentStipendiant