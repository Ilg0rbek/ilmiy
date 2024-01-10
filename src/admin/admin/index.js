import React, { useState } from "react";
import "./index.css"
import {
  MenuFoldOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  SettingOutlined,
  MenuUnfoldOutlined,
  FormOutlined,
  SnippetsOutlined,
  CreditCardOutlined
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Season from "../season";
import Students from "../students";
import News from "../news";
import Doctorant from "../doctoront/doctorant";
import StipendAll from "../season/StipendAll";
import StipendDetail from "../season/StipendDetail";
import FanTogarak from "../FanTogarak/FanTogarak";
import FanTogarakKafedra from "../FanTogarak/FanTogarakKafedra";
import TogarakDetail from "../FanTogarak/TogarakDetail";
import AdminPatent from "../AdminPatents/AdminPatetnt";
import PatentsList from "../AdminPatents/PatentsList";

const { Header, Sider, Content } = Layout;

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const data = [
    {
      key: "1",
      icon: <UsergroupAddOutlined />,
      label: "Stipendiantlar",
      path: "/admin/stipendiants",
    },
    {
      key: "7",
      icon: <SnippetsOutlined />,
      label: "Fan to'garaklar",
      path: "/admin/cources",
    },
    {
      key: "2",
      icon: <FormOutlined />,
      label: "Yangiliklar",
      path: "/admin/news",
    },
    {
      key: "3",
      icon:<UsergroupAddOutlined />,
      label: "Doktorantlar",
      path: "/admin/doctorantlist",
    },
    {
      key: "4",
      icon:<CreditCardOutlined />,
      label: "Patentlar",
      path: "/admin/patents-admin",
    },
    {
      key: "5",
      icon: <SettingOutlined />,
      label: "Sozlanmalar",
      path: "/admin/settings",
    },
    {
      key: "6",
      icon: <UserOutlined />,
      label: "Profile",
      path: "/admin/profile",
    },
    // {
    //   key: "6",
    //   icon: <UserOutlined />,
    //   label: "Doktorantlar",
    //   path: "/admin/profile",
    // },
   
  ];

  return (
    <Layout  style={{ width: "100%" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} width={"20%"}>
        <div
          className="demo-logo-vertical"
          style={{
            margin: "30px 10px",
            color: "white",
            fontWeight: "bold",
            fontFamily: "Croissant One",
            fontSize: "24px",

          }}
        >
          <NavLink
            style={{
              textDecoration: "none",
              color: "white",
              width:"100%",
              }} 
             
            to={"/admin"}
          >
            {!collapsed ? " Ilmiy admin panel" : "ADU"}
          </NavLink>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          items={data.map((v, index) => {
            return {
              ...v,
              label: (
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  to={v?.path}
                >
                  {v?.label}
                </Link>
              ),
            };
          })}
        />
      </Sider>
      <Layout
        style={{
          minHeight: "100vh",
          width: "80%",
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            width: "100%",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
        // mode={"vertical"}
          style={{
            margin: "84px 16px",
            padding: 24,
            // minHeight: "85vh",
            background: colorBgContainer,
            width: `${!collapsed ? "78%" : "92%"}`,
            // overflow:"initial"
          }} >
          <Routes>
            <Route path="/settings" element={"Hello settings"} />
            <Route path="/stipendiants" element={<Season />} />
            <Route path="/cources" element={<FanTogarak />} />
            <Route path="/doctorantlist" element={<Doctorant/>} />
            <Route path="/stipendiants/user-list" element={<Students />} />
            <Route path="/news" element={<News />} />
            <Route path="/stipendiants/all-stipends" element={<StipendAll/>} />
            <Route path="/stipendiants/all-stipends/:id" element={<StipendDetail/>} />
            <Route path="/cources/kafedra" element={<FanTogarakKafedra/>} />
            <Route path="/cources/kafedra/togarak" element={<TogarakDetail/>} />
            <Route path="/patents-admin" element={<AdminPatent />} />
            <Route path="/patents-admin/list" element={<PatentsList />} />
          </Routes>  
        </Content>
      </Layout>
    </Layout>
  );
};
export default Admin;
