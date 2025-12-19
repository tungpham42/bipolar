"use client"; // Must be client side for interactions

import React from "react";
import { Layout, Menu, theme, FloatButton } from "antd";
import { useRouter, usePathname } from "next/navigation"; // Next.js Hooks
import {
  HomeOutlined,
  HeartOutlined,
  MedicineBoxOutlined,
  InfoCircleOutlined,
  SafetyCertificateOutlined,
  EnvironmentOutlined,
  SmileOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    { key: "/", icon: <HomeOutlined />, label: "Tổng quan" },
    { key: "/bieu-hien", icon: <InfoCircleOutlined />, label: "Biểu hiện" },
    { key: "/phan-loai", icon: <HeartOutlined />, label: "Phân loại" },
    { key: "/cach-chua-tri", icon: <MedicineBoxOutlined />, label: "Điều trị" },
    { key: "/song-chung", icon: <SmileOutlined />, label: "Sống chung" },
    {
      key: "/trac-nghiem",
      icon: <SafetyCertificateOutlined />,
      label: "Trắc nghiệm",
    },
    { key: "/dia-chi", icon: <EnvironmentOutlined />, label: "Địa chỉ" },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 100,
          width: "100%",
          padding: "0 24px",
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            color: "#2a9d8f",
            fontWeight: 800,
            fontSize: "1.5rem",
            marginRight: "2rem",
            cursor: "pointer",
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          onClick={() => router.push("/")}
        >
          <HeartOutlined /> Lưỡng Cực
        </div>
        <Menu
          mode="horizontal"
          selectedKeys={[pathname || ""]} // Use pathname for highlighting
          items={menuItems}
          onClick={(e) => router.push(e.key)} // Use router.push
          style={{
            flex: 1,
            minWidth: 0,
            background: "transparent",
            borderBottom: "none",
            fontWeight: 600,
          }}
        />
      </Header>

      <Content style={{ padding: "32px 24px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            minHeight: 380,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>

      <Footer
        style={{
          textAlign: "center",
          color: "#888",
          background: "transparent",
        }}
      >
        <SmileOutlined style={{ color: "#2a9d8f" }} /> Bipolar Info ©
        {new Date().getFullYear()} — Vì sức khỏe tâm thần cộng đồng.
      </Footer>

      <FloatButton.BackTop
        type="primary"
        tooltip="Lên đầu trang"
        icon={<VerticalAlignTopOutlined />}
        style={{ right: 24, bottom: 24 }}
      />
    </Layout>
  );
};

export default MainLayout;
