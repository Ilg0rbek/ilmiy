import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, Button, message, Upload, Row, Col, Input } from "antd";
import { deleteData, getAllNews } from "../../redux/reducers/news.store";

const DeleteModal = (props) => {
  const { setIsModalOpen1, isModalOpen1, deleteId } = props;
  const dispatch = useDispatch();

  const handleOk = () => {
    setIsModalOpen1(false);
  };


  const handleDeleteData = () => {
    dispatch(deleteData(deleteId));
    message.success(`malumot o'chirildi`);
    dispatch(getAllNews());
    setIsModalOpen1(false)
  };

  return (
    <Modal
      title="Malumotni o'chirish"
      open={isModalOpen1}
      onOk={handleDeleteData}
      okText={"Saqlash"}
      cancelText={"Bekor qilish"}
      closable={false}
      onCancel={handleOk}
      width={800}>
      <div>
        <h4>Haqiqatdan ham shu mna'lumotni o'chirmoqchimisiz</h4>
      </div>
    </Modal>
  );
};

export default DeleteModal;
