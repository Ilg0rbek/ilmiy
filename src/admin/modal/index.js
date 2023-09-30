import { Modal, Form, Input, Row, Col } from "antd";
import React from "react";

const Modals = ({ isModalOpen, setIsModalOpen }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal
        title="Stipendiat talaba qo'shish"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form layout="vertical">
          <Row
            style={{
              justifyContent: "space-around",
            }}
          >
            <Col span={11}>
              <Form.Item label="Ismi">
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item label="Familyasi">
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item label="Ismi">
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item label="Familyasi">
                <Input size="large" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default Modals;
