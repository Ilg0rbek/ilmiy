import { Modal, Form, Button, message, Upload, Row, Col, Input } from "antd";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addNews, editData, showData } from "../../redux/reducers/news.store";
import { useEffect } from "react";
import { postProfile,getAllStudenData } from "../../redux/reducers/profile.store";


const DeleteModal = ({ isModalOpen, setIsModalOpen, statePut, showId }) => {
  const [file, setFile] = useState();
  const dispatch = useDispatch();

  const messagee = useSelector((state)=>state.profile.getText)
  console.log(messagee);

  useEffect(() => {
    if (showData !== undefined) {
      dispatch(showData());
    }
  }, []);

  useEffect(() => {
    dispatch(showData());
  }, []);

  const [form] = Form.useForm();

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const formData = new FormData();
  const adminAllData = {
    username:"",
    password:"",
    fullName:"",
    email:"",
    firstNumber:"",
    secondNumber:"",
    adress:""
  }

  const handleSubmit = (values) => {
    if (showId) {
      adminAllData.username = values.username
      adminAllData.password = values.password
      console.log(adminAllData);
      dispatch(postProfile(adminAllData));
      // message.success("Malumot saqlandi");
      // setIsModalOpen(false);
      form.resetFields();
    } else {
      adminAllData.username = values.username
      adminAllData.password = values.password
      dispatch(postProfile(adminAllData));
      console.log(adminAllData);
      message.success(messagee);
      setIsModalOpen(false);
      dispatch(getAllStudenData())
      form.resetFields();
    }
  };

  
  return (
    <div>
      <Modal
        title="Yangilik qo'shish"
        open={isModalOpen}
        onOk={form.submit}
        okText={"Saqlash"}
        cancelText={"Bekor qilish"}
        closable={false}
        onCancel={handleOk}
        width={800}>
        <Form
          layout="vertical"
          form={form}
          onFinish={handleSubmit}
          fields={[
            {
              name: ["username"],
              value: statePut?.title,
            },
            {
              name: ["password"],
              value: statePut?.desc,
            },
          ]}>
          <Row
            style={{
              justifyContent: "space-around",
            }}>
            <Col span={11}>
              <Form.Item
                name="username"
                label="Username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}>
                <Input autoComplete={"off"} size="large" />
              </Form.Item>
            </Col>
            <Col span={11}>
            <Form.Item
                name="password"
                label="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}>
                <Input autoComplete={"off"} size="large" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default DeleteModal;
