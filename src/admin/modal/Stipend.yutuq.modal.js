import { Modal, Form, Upload, Row, Col, Input,Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import axiosConfig from "../../redux/baseUrl";
import { useParams } from "react-router-dom";
const { TextArea } = Input;

const StipendYutuqModal = ({ isModalOpen, setIsModalOpen, yearId }) => {


    const [form] = Form.useForm();
    const [desc, setDesc] = useState("")
    const [image, setImage] = useState();
    const formData = new FormData();

    const handleChange = (e) => {
    };

    // console.log(startYear, endYear);

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const {id} = useParams()


    let season = sessionStorage.getItem("yearId")
    let stipend = sessionStorage.getItem("stipendNameId")
  
    const handleSubmit = (e) => {
      formData.append("image",image)
      formData.append("desc",desc)
    //   formData.append("child",[])
    //   formData.append("season",season)
    //   formData.append("stipend",stipend)
  
      axiosConfig.patch(`/students/update/${id}`,formData).then(res=>{
        setIsModalOpen(false);
        console.log(res);
      }).catch(err=>{
        console.log(err);
        console.log("bu desc",formData.get("desc"));
        console.log("bu image",formData.get("image"));
      })
      form.resetFields();
    };

    return (
        <Modal
            title="O'quv yilini qo'shish"
            open={isModalOpen}
            onOk={form.submit}
            okText={"Saqlash"}
            cancelText={"Bekor qilish"}
            closable={false}
            onCancel={handleOk}
            width={800}
        >
            <Form layout="vertical" form={form} onFinish={(a, b) => handleSubmit(a)} initialValues={{ remember: true }}>
                <Row style={{ justifyContent: "space-around", alignItems: "center", }}>
                <Col span={23}>
            <Form.Item name="image" label="Talaba rasmini yuklang" rules={[ { required: true, message: "Talaba rasmini yuklang", }, ]}>
                <div>
                  <Upload maxCount={1} accept=".png, .jpeg, .jpg" showUploadList={true}
                    beforeUpload={(file) => {
                      setImage(file);
                      return false;
                    }}>
                    <Button
                      icon={<UploadOutlined />}>
                      Rasm yuklash
                    </Button>
                  </Upload>
                </div>
              </Form.Item>
            <Form.Item name="desc" label="Yutuq haqida ma'lumot">
            <TextArea onChange={(e)=>setDesc(e.target.value)} placeholder="Yutuq haqida to'liq ma'lumot kiriting" rows={4} />
              </Form.Item>
            </Col>
                </Row>
            </Form>
        </Modal>
    )
}

export default StipendYutuqModal;