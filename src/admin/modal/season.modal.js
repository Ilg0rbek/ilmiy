import { Modal, Form, DatePicker, Row, Col, Input } from "antd";
import React, { useState } from "react";

const SeasonModal = ({ isModalOpen, setIsModalOpen }) => {
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
        title="O'quv yilini qo'shish"
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
              alignItems: "center",
            }}
          >
            <Col span={23}>
              <Form.Item name="year" label="O'quv yilini kiriting">
                <DatePicker.RangePicker
                  style={{
                    width: "100%",
                  }}
                  size="large"
                  picker="year"
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
            {dataValue && (
              <>
                <Col span={11}>
                  <Form.Item name="grand-one" label="Stipendiya nomi">
                    <Input autoComplete={"off"} size="large" />
                  </Form.Item>
                </Col>
                <Col span={11}>
                  <Form.Item name="grand-two" label="Stipendiya nomi">
                    <Input autoComplete={"off"} size="large" />
                  </Form.Item>
                </Col>
                <Col span={11}>
                  <Form.Item name="grand-three" label="Stipendiya nomi">
                    <Input autoComplete={"off"} size="large" />
                  </Form.Item>
                </Col>{" "}
                <Col span={11}>
                  <Form.Item name="grand-four" label="Stipendiya nomi">
                    <Input autoComplete={"off"} size="large" />
                  </Form.Item>
                </Col>
              </>
            )}
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default SeasonModal;
