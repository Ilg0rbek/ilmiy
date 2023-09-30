import React, { useState } from "react";
import {
  MenuFoldOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  SettingOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Students from "../year";
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
      key: "2",
      icon: <SettingOutlined />,
      label: "Sozlanmalar",
      path: "/admin/settings",
    },
    {
      key: "3",
      icon: <UserOutlined />,
      label: "Profile",
      path: "/admin/profile",
    },
  ];

  return (
    <Layout style={{ width: "100%" }}>
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
              color: "white  ",
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
          height: "100vh",
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
          style={{
            margin: "84px 16px",
            padding: 24,
            height: "85vh",
            background: colorBgContainer,
            width: `${!collapsed ? "78%" : "92%"}`,
          }}
        >
          <Routes>
            <Route path="/settings" element={"Hello settings"} />
            <Route path="/stipendiants" element={<Students />} />
            <Route path="/profile" element={"Hello user"} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Admin;
