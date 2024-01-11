import { Modal, Form, DatePicker, Row, Col, Input,Upload,Button } from "antd";
import React, { useState } from "react";
import axiosConfig from "../../redux/baseUrl";
import { UploadOutlined } from "@ant-design/icons";

const AddAdminGuvohnomaYear = ({ isModalOpen, setIsModalOpen }) => {

    const [form] = Form.useForm();
    const [image, setImage] = useState();
    const [year, setYear] = useState("")
    const [date, setDate] = useState("")

    const handleChange = (e) => {
        setYear(e)
    };
    const handleChange2 = (e) => {
        console.log(e);
        setDate(e)
    };

    // console.log(startYear, endYear);

    const handleOk = () => {
        setIsModalOpen(false);
    };
    let formData = new FormData();

    const handleSubmit = (e, b) => {
        formData.append("fullname",e.fullname)
        formData.append("library",e.library)
        formData.append("guvohonmanumber",e.guvohonmanumber)
        formData.append("year",year)
        formData.append("guvohnoma",image)
        formData.append("date",date)
        // console.log( formData.get("fullname"));
        axiosConfig.post("/guvohnoma", formData).then(res => {
            console.log("res", res);
            setYear("")
            sessionStorage.setItem("year", res.data._id)
            setIsModalOpen(false);
        }).catch(err => {
            console.log("err", err);
        })
        // form.resetFields();
    };

    return (
        <div>
            <Modal
                title="Patent yilini qo'shish"
                open={isModalOpen}
                onOk={form.submit}
                okText={"Saqlash"}
                cancelText={"Bekor qilish"}
                closable={false}
                onCancel={handleOk}
                width={800}
            >
                <Form layout="vertical" form={form} onFinish={(a, b) => handleSubmit(a, b)} initialValues={{ remember: true }}>
                    <Row style={{ justifyContent: "space-around", alignItems: "center", }}>
                        <Col span={23}>
                            <Form.Item name="year" label="Patent yilini qo'shish">
                                <DatePicker style={{ width: "100%", }}
                                    size="large"
                                    picker="year"
                                    onChange={(a, b) => handleChange(b)} />
                            </Form.Item>
                            <div>
                                <Form.Item name="fullname" label="F.I.O">
                                    <Input placeholder="Familiya, ismi, otasini ismi" />
                                </Form.Item>
                            </div>
                            <div>
                                <Form.Item name="library" label="Ihtiro, foydali model, sanoat namunasi, seleksiya yutug'i uchun patent ishlanmaning nomi">
                                    <Input placeholder="Ihtiro, foydali model, sanoat namunasi, seleksiya yutug'i uchun patent ishlanmaning nomi" />
                                </Form.Item>
                            </div>
                            <div>
                                <Form.Item name="date" label="Berilgan sana">
                                    <DatePicker style={{ width: "100%", }}
                                        size="large"
                                        picker="year"
                                        onChange={(a, b) => handleChange2(b)}
                                    />
                                </Form.Item>
                            </div>
                            <div>
                                <Form.Item name="guvohonmanumber" label="Qayd raqami">
                                    <Input placeholder="Qayd raqami" />
                                </Form.Item>
                            </div>
                            <Form.Item name="image" label="patentni kiriting" rules={[{ required: true, message: "Talaba rasmini yuklang", },]}>
                            <div>
                                <Upload maxCount={1} accept=".pdf, .docx, .doc" showUploadList={true}
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
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </div>
    );
};

export default AddAdminGuvohnomaYear;
