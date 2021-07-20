import {
  AppstoreOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";
import { Link } from "react-router-dom";
import { user } from "../../App";

const MenuLeft = () => {
  return (
    <div>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/dashboard">Dasboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<TeamOutlined />}>
          <Link to="/customer">Khách hàng</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Nhãn hiệu">
          <Menu.Item key="3">Vans</Menu.Item>
          <Menu.Item key="4">Converser</Menu.Item>
          <Menu.Item key="5">Nike</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<DatabaseOutlined />} title="Danh mục">
          <Menu.Item key="6">Giày thể thao</Menu.Item>
          <Menu.Item key="7">Giày nam</Menu.Item>
          <Menu.Item key="8">Giày nữ</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<UserOutlined />} title="Tài khoản">
          <Menu.Item key="11">Xem tài khoản</Menu.Item>
          <Menu.Item key="12">Đổi mật khẩu</Menu.Item>
          {user ? (
            <Menu.Item key="10">Đăng xuất</Menu.Item>
          ) : (
            <>
              <Menu.Item key="9">
                <Link to="/login">Đăng nhập</Link>
              </Menu.Item>
              <Menu.Item key="13">
                <Link to="/login">Đăng ký</Link>
              </Menu.Item>
            </>
          )}
        </SubMenu>
      </Menu>
    </div>
  );
};

export default MenuLeft;
