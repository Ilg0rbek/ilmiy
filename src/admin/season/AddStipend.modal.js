import React, {useState} from "react";
import { Modal, Form, DatePicker, Row, Col, Input,Upload,Button } from "antd";
import axiosConfig from "../../redux/baseUrl";
import { UploadOutlined } from "@ant-design/icons";
const { TextArea } = Input;

const AddStipend = ({ isModalOpen, setIsModalOpen }) =>{

  const [image, setImage] = useState();
  const formData = new FormData();
  const [desc, setDesc] = useState("")
  const [form] = Form.useForm();
  const handleOk = () => {
    setIsModalOpen(false);
  };

  let season = sessionStorage.getItem("yearId")
  let stipend = sessionStorage.getItem("stipendNameId")

  const handleSubmit = async (e) => {
    console.log(image);
    formData.append("image",image)
    formData.append("desc",desc)
    formData.append("fullname",e.fullname)
    formData.append("child",[])
    formData.append("season",season)
    formData.append("stipend",stipend)

    await axiosConfig.post(`/students/create`,formData).then(res=>{
      setIsModalOpen(false);
      console.log(res);
      console.log("salom"
       , {fullname:e.fullname, child:[], season:season, stipend:stipend}
        );
    }).catch(err=>{
      console.log("salom"
       , {fullname:e.fullname, child:[], season:season, stipend:stipend}
        );
      console.log(err);
    })
    form.resetFields();
  };

    return(
        <div>
             <Modal
        title="Stipendiat qo'shish"
        open={isModalOpen}
        onOk={form.submit}
        okText={"Saqlash"}
        cancelText={"Bekor qilish"}
        closable={false}
        onCancel={handleOk}
        width={800}
      >
        <Form layout="vertical" form={form} onFinish={(a,b)=>handleSubmit(a)} initialValues={{ remember: true }}>
          <Row style={{justifyContent: "space-around", alignItems: "center", }}>
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
            <Form.Item name="fullname" label="F.I.O kiriting">
              <Input placeholder="F.I.O kiriting" />
              </Form.Item>
            <Form.Item name="desc" label="Stipend haqida qisqacha ma'lumot yozing">
            <TextArea onChange={(e)=>setDesc(e.target.value)} placeholder="Stipend haqida qisqacha ma'lumot yozing" rows={4} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
        </div>
    )
}

export default AddStipend