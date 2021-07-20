import { BackTop, Breadcrumb, Layout, Spin } from "antd";
import { Suspense, useState } from "react";
import { user } from "../App";
import MenuLeft from "../components/Layout/Menu";
import AdminRoute from "./AdminRoute";

const { Header, Content, Footer, Sider } = Layout;

export const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {user ? (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo">Đây là LOGO</div>
          <MenuLeft />
        </Sider>
      ) : null}
      <BackTop />
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          {user ? (
            <>
              <Header
                className="site-layout-background"
                style={{ padding: 0, background: "white" }}
              />
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
            </>
          ) : null}
          <Suspense fallback={<Spin />}>
            <AdminRoute />
          </Suspense>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
