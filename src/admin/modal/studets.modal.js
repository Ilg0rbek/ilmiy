import { Modal, Form, Row, Col, Input } from "antd";
import React from "react";

const StudentModal = ({ setIsModalOpen, isModalOpen }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal
        title="Talaba qo'shish"
        open={isModalOpen}
        onOk={handleOk}
        okText={"Saqlash"}
        cancelText={"Yopish"}
        closable={false}
        onCancel={handleOk}
        width={800}
      >
        <Form layout="vertical">
          <Row
            style={{
              justifyContent: "space-around",
            }}
          >
            <Col span={11}>
              <Form.Item name="name" label="Ism">
                <Input autoComplete={"off"} size="large" />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item name="lastname" label="Familya">
                <Input autoComplete={"off"} size="large" />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item name="course" label="Kursi">
                <Input autoComplete={"off"} size="large" />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item name="course" label="Kursi">
                <Input.TextArea
                  maxLength={300}
                  style={{
                    height: 120,
                    marginBottom: 24,
                  }}
                  placeholder="Talaba haqida"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default StudentModal;
