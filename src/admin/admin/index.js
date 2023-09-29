import React, { useState } from "react";
import {
  MenuFoldOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  SettingOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Route, Routes, Link } from "react-router-dom";
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
      path: "/admin/student",
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
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} width={"17%"}>
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
          {!collapsed ? " Ilmiy admin panel" : "ADU"}
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
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
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
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Hello evrebody
        </Content>
      </Layout>
    </Layout>
  );
};
export default Admin;
