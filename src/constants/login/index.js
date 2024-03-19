import React, { useState } from "react";
import "./login.css";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../redux/reducers/auth.store";
import { useEffect } from "react";
import axiosConfig, { setAuthToken } from "../../redux/baseUrl";
import { Oval } from 'react-loader-spinner'



const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const token = sessionStorage.getItem("token")

  const onFinish = (values) => {
    setLoading(true)
    axiosConfig.post("/auth/login", values).then(res => {
      // console.log(res.data.data);
      setData(res.data.data)
      sessionStorage.setItem("user", res.data.data.role)
      sessionStorage.setItem("userId", res.data.data._id)
      sessionStorage.setItem("token", res.data.token)
      setLoading(false)
    }).catch(err => {
      console.log(err);
    })

  };



  useEffect(() => {
    if (data?.role == "admin") {
      navigate(`/admin`);
    }
    else if (data?.role == "student") {
      navigate("/doktarants/profile")
    }
    // setAuthToken(sessionStorage.getItem("token"))
  }, [token]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // console.log("state", data);
  return (
    loading ? <div className="for_loader2">
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}

      />
    </div> :
      <div className="login-page">
        <div className="login-box">
          <div className="illustration-wrapper">
            <img
              src="https://res.cloudinary.com/dax5cx2sv/image/upload/v1710829193/ilmiy_z6lwrg.png"
              alt="Login"
            />
          </div>
          <Form
            name="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
            <p className="form-title">Welcome to</p>
            <p>Login to the Dashboard</p>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}>
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}>
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button">
                LOGIN
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
  );
};

export default Login;
