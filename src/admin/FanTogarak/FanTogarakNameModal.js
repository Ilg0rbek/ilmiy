import { Modal, Form, DatePicker, Row, Col, Input } from "antd";
import React, { useState } from "react";
import axiosConfig from "../../redux/baseUrl";

const FanTogarakNameModal = ({ isModalOpen2, setIsModalOpen2, yearId }) => {

  const [form] = Form.useForm();

  const [stipendiaName, setStipendiaName] = useState("") 

  const handleChange = (e) => {
  };

  // console.log(startYear, endYear);

  const handleOk = () => {
    setIsModalOpen2(false);
  };

  let kafedraId = sessionStorage.getItem("kafedraId")
  let yearId1 = sessionStorage.getItem("yearId")

  const handleSubmit = (e) => {
    console.log("e.title");
    setStipendiaName(e.title)
    // console.log(stipendiaName);
    axiosConfig.patch(`/faculty/${kafedraId}`,{title:e.title}).then(res=>{
      // console.log({title:e.title});

      setIsModalOpen2(false);
    }).catch(err=>{
      console.log(err.response);
    })
    form.resetFields();
  };

//   console.log(stipendiaName);

  return (
    <div>
      <Modal
        title="To'garak nomini qo'shish"
        open={isModalOpen2}
        onOk={form.submit}
        okText={"Saqlash"}
        cancelText={"Bekor qilish"}
        closable={false}
        onCancel={handleOk}
        width={800}
      >
        <Form layout="vertical" form={form} onFinish={(a,b)=>handleSubmit(a)} initialValues={{ remember: true }}>
          <Row style={{justifyContent: "space-around", alignItems: "center", }}>
            <Col span={23}>
              <Form.Item name="title" label="To'garak nomini kiriting">
              <Input placeholder="To'garak nomini kiriting" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default FanTogarakNameModal;
