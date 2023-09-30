import { Col, Row } from "antd";
import React, { useState } from "react";
import Modals from "../modal";

const Students = () => {
  const showModal = () => {
    setIsModalOpen(true);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Modals isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Row
        style={{
          gap: "10px",
        }}
      >
        <Col span={11}>
          <div
            style={{
              backgroundColor: "#f4f4f4f4",
              padding: "20px 40px",
              borderRadius: "5px",
              height: "95px",
            }}
            onClick={showModal}
          >
            <h5>Prezident stipendiyasiga ega talabalar</h5>
          </div>
        </Col>
        <Col span={11}>
          <div
            style={{
              backgroundColor: "#f4f4f4f4",
              padding: "20px 40px",
              borderRadius: "5px",
            }}
          >
            <h5>Navoiy nomli davlat stipendiyasiga ega talabalar</h5>
          </div>
        </Col>
        <Col span={11}>
          <div
            style={{
              backgroundColor: "#f4f4f4f4",
              padding: "20px 40px",
              borderRadius: "5px",
            }}
          >
            <h5>Islom Karimovich nomli davlat stipendiyasiga ega talabalar</h5>
          </div>
        </Col>
        <Col span={11}>
          <div
            style={{
              backgroundColor: "#f4f4f4f4",
              padding: "20px 40px",
              borderRadius: "5px",
            }}
          >
            <h5>Ulug'bek nomli davlat stipendiyasiga ega talabalar</h5>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Students;
