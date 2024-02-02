import { Modal, Form, DatePicker, Row, Col, Input } from "antd";
import React, { useState } from "react";
import axiosConfig from "../../redux/baseUrl";

const FanTogarakAddKafedra = ({ isModalOpen, setIsModalOpen, yearId }) => {

  const [form] = Form.useForm();

  const [stipendiaName, setStipendiaName] = useState("") 

  const handleChange = (e) => {
  };

  // console.log(startYear, endYear);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  let FacultyId = sessionStorage.getItem("FacultyId")
  let yearId1 = sessionStorage.getItem("yearId")

  const handleSubmit = (e) => {
    // console.log("e.title");
    setStipendiaName(e.title)
    // console.log(stipendiaName);
    axiosConfig.post(`/faculty`,{title:e.title, year_id:yearId1, faculty_id:FacultyId, child:[]}).then(res=>{
      // console.log({title:e.title});
      console.log(res);
      setIsModalOpen(false);
    }).catch(err=>{
      console.log(err.response);
    })
    form.resetFields();
  };

//   console.log(stipendiaName);

  return (
    <div>
      <Modal
        title="Kafedra nomini qo'shish"
        open={isModalOpen}
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
              <Form.Item name="title" label="Kafedra nomini kiriting">
              <Input placeholder="Kafedra nomini kiriting" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default FanTogarakAddKafedra;
