import { Modal, Form, Button, message, Upload, Row, Col, Input } from "antd";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addNews, editData, showData } from "../../redux/reducers/news.store";
import { useEffect } from "react";

const NewsModal = ({ isModalOpen, setIsModalOpen, statePut, showId }) => {
  const [file, setFile] = useState();
  const dispatch = useDispatch();

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

  const handleSubmit = (values) => {
    if (showId) {
      formData.append("img", file);
      formData.append("title", values.title);
      formData.append("desc", values.desc);
      console.log(formData.get("title"));
      console.log(formData.get("img"));
      console.log(formData.get("desc"));
      dispatch(editData({showId,formData}));
      // message.success("Malumot saqlandi");
      setIsModalOpen(false);
      form.resetFields();
    } else {
      formData.append("img", file);
      formData.append("title", values.title);
      formData.append("desc", values.desc);
      dispatch(addNews(formData));
      message.success("Malumot saqlandi");
      setIsModalOpen(false);
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
              name: ["title"],
              value: statePut?.title,
            },
            {
              name: ["desc"],
              value: statePut?.desc,
            },
          ]}>
          <Row
            style={{
              justifyContent: "space-around",
            }}>
            <Col span={11}>
              <Form.Item
                name="title"
                label="Title"
                rules={[
                  {
                    required: true,
                    message: "Please input your title!",
                  },
                ]}>
                <Input autoComplete={"off"} size="large" />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item
                name="img"
                label="Rasm yuklash"
                rules={[
                  {
                    required: true,
                    message: "Please upload image",
                  },
                ]}>
                <div
                  style={{
                    border: "1px solid #d9d9d9",
                    borderRadius: "10px",
                  }}>
                  <Upload
                    maxCount={1}
                    accept=".png, .jpeg, .jpg"
                    showUploadList={true}
                    beforeUpload={(file) => {
                      setFile(file);
                      return false;
                    }}>
                    <Button
                      style={{
                        border: "none",
                      }}
                      size="large"
                      icon={<UploadOutlined />}>
                      Rasm yuklash
                    </Button>
                  </Upload>
                </div>
              </Form.Item>
            </Col>
            <Col span={23}>
              <Form.Item
                name="desc"
                label="Yangilik haqida batafsil"
                rules={[
                  {
                    required: true,
                    message: "Please input your description!",
                  },
                ]}>
                <Input.TextArea
                  maxLength={300}
                  style={{
                    height: 120,
                    marginBottom: 24,
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default NewsModal;
