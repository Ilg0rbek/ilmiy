import React from "react";
import "./profile.css";
import { Button, Form, Input, Progress, Tooltip, Upload } from "antd";
import { UploadOutlined, MessageOutlined } from "@ant-design/icons";
import { red, green } from "@ant-design/colors";

const StudentProlie = () => {
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
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4>Abdumalikov I</h4>
                      <p className="text-secondary mb-1">Doktarantura talabasi</p>
                      <p className="text-muted font-size-sm">
                        Oltinko'l tumani , Andijon viloyati
                      </p>
                      {/* <button className="btn btn-primary">Follow</button>
                      <button className="btn btn-outline-primary ms-1">Message</button> */}
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
                      Abdumalikov Ilg'orbek
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Abdumalikov@gamil.al
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Tel nomer</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">(239) 816-9029</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Qo'shimcha nomer</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">(320) 380-4539</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Manzil</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Oltinkol tumani, Andijon viloyati
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <Button type="dashed" secondary>Tahrirlash</Button>
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
                        <Upload>
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
                        <Upload>
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
                        <Upload>
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
                        <Upload>
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
                          <Input placeholder="Eski parolni kiriting"/>
                        </Form.Item>
                        <Form.Item>
                          <Input placeholder="Yangi parolni kiriting"/>
                        </Form.Item>
                        <Form.Item>
                          <Input placeholder="Yangi parolni qayta kiriting"/>
                        </Form.Item>
                        <Button danger type="dashed">Yangilash</Button>
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
