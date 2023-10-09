import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import NewsModal from "../modal/news.modal";

const News = () => {
  const showModal = () => {
    setIsModalOpen(true);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <NewsModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div className="addNewYear" onClick={showModal}>
        Ilmiy bo'limdagi yangiliklarni qo'shish <PlusOutlined />
      </div>
    </div>
  );
};

export default News;
