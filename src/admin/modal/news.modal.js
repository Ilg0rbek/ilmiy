import { Modal, Form, Button, message, Upload, Row, Col, Input } from "antd";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import useSelection from "antd/es/table/hooks/useSelection";
import { addNews } from "../../redux/reducers/news.store";

const NewsModal = ({ isModalOpen, setIsModalOpen }) => {
  const [file, setFile] = useState();
  const dispatch = useDispatch();

  const getPoostMessege = useSelector((state) => state.news.postData);

  console.log(getPoostMessege);

  const [form] = Form.useForm();

  const handleOk = () => {
    setIsModalOpen(false);
  };
  // console.log(file);

  const formData = new FormData();

  // "data", { ...values, img: file }
  const handleSubmit = (values) => {
    formData.append("img", file);
    formData.append("title", values.title);
    formData.append("desc", values.desc);
    dispatch(addNews(formData));
    message.success("Malumot saqlandi")
    setIsModalOpen(false)
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
        width={800}>
        <Form
          layout="vertical"
          form={form}
          onFinish={handleSubmit}
          initialValues={{ remember: true }}>
          <Row
            style={{
              justifyContent: "space-around",
            }}>
            <Col span={11}>
              <Form.Item
                name="title"
                label="Yangilik haqida qisqacha"
                rules={[
                  {
                    required: true,
                    message: "Please input your title!",
                  },
                  {
                    validator: (_, value = "") =>
                      !value.includes(" ")
                        ? Promise.resolve()
                        : Promise.reject(new Error("No spaces allowed")),
                  },
                ]}>
                <Input autoComplete={"off"} size="large" />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item name="img" label="Rasm yuklash"  rules={[
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
                  {
                    validator: (_, value = "") =>
                      !value.includes(" ")
                        ? Promise.resolve()
                        : Promise.reject(new Error("No spaces allowed")),
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

{
  /* <Form
layout="vertical"
form={form}
onFinish={handleSubmit}
initialValues={{ remember: true }}>
<Row
  style={{
    justifyContent: "space-around",
  }}>
  <Col span={11}>
    <Form.Item name="title" label="Yangilik haqida qisqacha">
      <Input autoComplete={"off"} size="large" />
    </Form.Item>
  </Col>
  <Col span={11}>
    <Form.Item name="img" label="Rasm yuklash">
      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "10px",
        }}>
        <Upload
          maxCount={1}
          accept=".png, .jpeg, .jpg"
          showUploadList={false}
          beforeUpload={(file) => {
            console.log(file);
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
</Form> */
}

// <div className="row">
// <div className="col-md-6 col-sm-12">
//   <div class="mb-3">
//     <label htmlFor="name" class="form-label">
//       Title
//     </label>
//     <input
//       type="text"
//       className="form-control"
//       onChange={(e) => setAllData({...allData, title:e.target.value})}
//     />
//   </div>

//   <div class="mb-3">
//     <label htmlFor="name" class="form-label">
//       desc
//     </label>

//    < textarea class="form-control"  id="floatingTextarea2" onChange={(e) => setAllData({...allData,desc:e.target.value})}></textarea>
//   </div>
// </div>

// <div className="col-md-6 col-sm-12">
//   <div class="mb-3">
//     <label for="formFile" class="form-label">
//       img
//     </label>
//     <input class="form-control" type="file" id="formFile" onChange={(e) =>setFile(e.target.files[0])}/>
//   </div>
// </div>
// </div>
