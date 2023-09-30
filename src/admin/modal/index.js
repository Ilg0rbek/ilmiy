import { Modal, Form, DatePicker, Input, Row, Col } from "antd";
import React from "react";

const Modals = ({ isModalOpen, setIsModalOpen }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const { RangePicker } = DatePicker;

  return (
    <div>
      <Modal
        title="O'quv yilini qo'shish"
        open={isModalOpen}
        onOk={handleOk}
        okText={"Saqlash"}
        closable={false}
        width={800}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <Form layout="vertical">
          <Row
            style={{
              justifyContent: "space-around",
            }}
          >
            <Col span={11}>
              <RangePicker
                style={{
                  width: "100% !important",
                }}
                width={"100%"}
                size="large"
                picker="year"
              />
            </Col>
            <Col span={11}>
              <Form.Item name="note" label="Note" rules={[{ required: true }]}>
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item name="note" label="Note" rules={[{ required: true }]}>
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item name="note" label="Note" rules={[{ required: true }]}>
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
