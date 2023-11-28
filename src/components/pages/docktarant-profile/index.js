import React, { useEffect, useState } from "react";
import "./profile.css";
import { Button, Form, Input, Progress, Tooltip, Upload } from "antd";
import { UploadOutlined, MessageOutlined } from "@ant-design/icons";
import { red, green } from "@ant-design/colors";
import { useDispatch, useSelector } from "react-redux";
import { postProfile, updateProfile } from "../../../redux/reducers/profile.store";

const StudentProlie = () => {
  const [edit, setEdit] = useState(true);
  const [userProfileData, setUserProfileData] = useState({
    fullName: "",
    email: "",
    firstNumber: "",
    seccondNumber: "",
    adress: "",
  });

  const dispatch = useDispatch()
  const state = useSelector(state => state.profile)


  const handleChange = (e) => {
    setUserProfileData(() => {
      return {
        ...userProfileData,
        [e.target.name]: e.target.value,
      };
    });
  };
  const hendleUpdate = () =>{
        dispatch(postProfile(userProfileData))
  }

  useEffect(()=>{},[state.loading])

  // console.log(userProfileData);

  const formData = new FormData()

  const [plan, setPlan] = useState("")
  const [program, setProgram] = useState("")
  const [article, setArticle] = useState("")
  const [thesis, setThesis] = useState("")

  const addAllFile = () =>{
    formData.append("plan", plan)
    formData.append("program", program)
    formData.append("article", article)
    formData.append("thesis", thesis)
    formData.append("userId", "")
    // console.log("allFile",formData.get("plan"));
    // console.log("allFile",formData.get("program"));
    // console.log("allFile",formData.get("article"));
    // console.log("allFile",formData.get("thesis"));
  }


  return (
    <div>
      <div className="container mt-3  ">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png "
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4>Abdumalikov I</h4>
                      <p className="text-secondary mb-1">
                        Doktarantura talabasi
                      </p>
                      <p className="text-muted font-size-sm">
                        Oltinko'l tumani , Andijon viloyati
                      </p>
                      {/* <button className="btn btn-">Follow</button>
                      <button className="btn btn-outline- ms-1">Message</button> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="m-2">Habarlarni ko'rish</h6>
                    <MessageOutlined className="ms-2" />
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Ism familya</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {edit ? (
                        <Input disabled value={"Abduraxmonov Samandar"} placeholder="Full name" />
                      ) : (
                        <Input name="fullName" onChange={handleChange} placeholder="Full name" />
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {edit ? (
                        <Input disabled value={"samandarab200212@gmail.com"} type="email" placeholder="Gmail" />
                      ) : (
                        <Input name="email" onChange={handleChange} type="email" placeholder="Gmail" />
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Tel nomer</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {edit ? <Input disabled value={"+998933263623"} placeholder="+998 " /> : <Input name="firstNumber" onChange={handleChange} placeholder="+998 " />}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Qo'shimcha nomer</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {edit ? <Input  disabled value={"+998933263623"} placeholder="+998 " /> : <Input name="seccondNumber" onChange={handleChange} placeholder="+998 " />}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Manzil</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {edit ? (
                        <Input  disabled value={"Andijon viloyati"} placeholder="Manzil " />
                      ) : (
                        <Input name="adress" onChange={handleChange} placeholder="Manzil " />
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <Button type="primary" ghost onClick={() => setEdit(!edit)}>
                        {edit ? "Qo'shish" : "Bekor qilish"}
                      </Button>
                      {!edit && (
                        <Button onClick={hendleUpdate} type="primary" danger ghost className="ms-3" >
                          Saqlash
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center  justify-content-between  mb-3">
                        Kerakli hujjatlar
                        <Tooltip title="3 yuklandi / 1 ta xujjat yuklanmagan / 4 ta xujjat bilan to'liq bo'ladi ">
                          <Progress
                            percent={75}
                            steps={4}
                            strokeColor={[green[6], green[6], red[5]]}
                          />
                        </Tooltip>
                      </h6>
                      <div
                        className="mb-3"
                        style={{
                          border: "1px solid #d9d9d9",
                          borderRadius: "10px",
                        }}
                      >
                        <Upload
                        beforeUpload={(file) => {
                          setPlan(file)
                          return false;
                        }}
                        accept=".docx, doc, zip, pdf"
                        maxCount={1}
                        >
                          <Button
                            size="meduim"
                            style={{
                              border: "none",
                            }}
                            
                            icon={<UploadOutlined />}
                          >
                            Shaxsiy rejani yuklash
                          </Button>
                        </Upload>
                      </div>
                      <div
                        className="mb-3"
                        style={{
                          border: "1px solid #d9d9d9",
                          borderRadius: "10px",
                        }}
                      >
                        <Upload
                         beforeUpload={(file) => {
                          setProgram(file)
                          return false;
                        }}
                        accept=".docx, doc, zip, pdf"
                        maxCount={1}
                        >
                          <Button
                            size="meduim"
                            style={{
                              border: "none",
                            }}
                            icon={<UploadOutlined />}
                          >
                            Shaxsiy dasturni yuklash
                          </Button>
                        </Upload>
                      </div>
                      <div
                        className="mb-3"
                        style={{
                          border: "1px solid #d9d9d9",
                          borderRadius: "10px",
                        }}
                      >
                        <Upload
                        beforeUpload={(file) => {
                          setArticle(file)
                          return false;
                        }}
                        accept=".docx, doc, zip, pdf"
                        >
                          <Button
                            size="meduim"
                            style={{
                              border: "none",
                            }}
                            icon={<UploadOutlined />}
                          >
                            Maqolani yuklash
                          </Button>
                        </Upload>
                      </div>
                      <div
                        className="mb-3"
                        style={{
                          border: "1px solid #d9d9d9",
                          borderRadius: "10px",
                        }}
                      >
                        <Upload
                        beforeUpload={(file) => {
                          setThesis(file)
                          return false;
                        }}
                        accept=".docx, doc, zip, pdf"
                        >
                          <Button
                            size="meduim"
                            style={{
                              border: "none",
                            }}
                            icon={<UploadOutlined />}
                          >
                            Tezis yuklash
                          </Button>
                        </Upload>
                      </div>
                      <Button onClick={addAllFile} type="primary" ghost>Yuklash</Button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                        Foydalanuvchi parolini yangilash
                      </h6>
                      <Form>
                        <Form.Item>
                          <Input placeholder="Eski parolni kiriting" />
                        </Form.Item>
                        <Form.Item>
                          <Input placeholder="Yangi parolni kiriting" />
                        </Form.Item>
                        <Form.Item>
                          <Input placeholder="Yangi parolni qayta kiriting" />
                        </Form.Item>
                        <Button type="primary" ghost>Yangilash</Button>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProlie;
