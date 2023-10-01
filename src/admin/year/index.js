import React, { useState } from "react";
import Modals from "../modal";
import { PlusOutlined } from "@ant-design/icons";
import "./year.css";

const Students = () => {
  const showModal = () => {
    setIsModalOpen(true);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Modals isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div className="addNewYear" onClick={showModal} >
        Yangi o'quv yili hamda stipendiyalar turini qo'shish <PlusOutlined />
      </div>
    </div>
  );
};

export default Students;
