import { Modal, Form, DatePicker, Row, Col, Input } from "antd";
import React, { useState } from "react";

const Modals = ({ isModalOpen, setIsModalOpen }) => {
  const [dataValue, setDataValue] = useState();

  const handleChange = (e) => {
    setDataValue(e);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal
        title="O'quv yilini qo'shish"
        open={isModalOpen}
        onOk={handleOk}
        okText={"Saqlash"}
        closable={false}
        cancelButtonProps={{ style: { display: "none" } }}
        width={800}
      >
        <Form layout="vertical">
          <Row
            style={{
              justifyContent: "space-around",
              alignItems: "center",
            }}
            id="row"
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

export default Modals;
