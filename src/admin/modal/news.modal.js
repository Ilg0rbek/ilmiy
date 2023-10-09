import { Modal, Form, Button, message, Upload, Row, Col, Input } from "antd";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";

const NewsModal = ({ isModalOpen, setIsModalOpen }) => {
  const [dataValue, setDataValue] = useState();

  const [form] = Form.useForm();

  const handleChange = (e) => {
    setDataValue(e);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (values) => {
    console.log(values);
    form.resetFields();
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
        width={800}
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={handleSubmit}
          initialValues={{ remember: true }}
        >
          <Row
            style={{
              justifyContent: "space-around",
            }}
          >
            <Col span={11}>
              <Form.Item name="grand-one" label="Yangilik haqida qisqacha">
                <Input autoComplete={"off"} size="large" />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item name="grand-one" label="Rasm yuklash">
                <div
                  style={{
                    border: "1px solid #d9d9d9",
                    borderRadius: "10px",
                  }}
                >
                  <Upload>
                    <Button
                      style={{
                        border: "none",
                        }}
                      size="large"
                      icon={<UploadOutlined />}
                    >
                      Rasm yuklash
                    </Button>
                  </Upload>
                </div>
              </Form.Item>
            </Col>
            <Col span={23}>
              <Form.Item name="desc" label="Yangilik haqida batafsil">
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
