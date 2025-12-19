"use client"; // Must be client side for interactions

import React from "react";
import { Layout, Menu, theme, FloatButton } from "antd";
import { useRouter, usePathname } from "next/navigation"; // Next.js Hooks
import Link from "next/link"; // Import Link
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

  // Updated menuItems to use Link in the label
  const menuItems = [
    {
      key: "/",
      icon: <HomeOutlined />,
      label: <Link href="/">Tổng quan</Link>,
    },
    {
      key: "/bieu-hien",
      icon: <InfoCircleOutlined />,
      label: <Link href="/bieu-hien">Biểu hiện</Link>,
    },
    {
      key: "/phan-loai",
      icon: <HeartOutlined />,
      label: <Link href="/phan-loai">Phân loại</Link>,
    },
    {
      key: "/cach-chua-tri",
      icon: <MedicineBoxOutlined />,
      label: <Link href="/cach-chua-tri">Điều trị</Link>,
    },
    {
      key: "/song-chung",
      icon: <SmileOutlined />,
      label: <Link href="/song-chung">Sống chung</Link>,
    },
    {
      key: "/trac-nghiem",
      icon: <SafetyCertificateOutlined />,
      label: <Link href="/trac-nghiem">Trắc nghiệm</Link>,
    },
    {
      key: "/dia-chi",
      icon: <EnvironmentOutlined />,
      label: <Link href="/dia-chi">Địa chỉ</Link>,
    },
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
          // onClick={(e) => router.push(e.key)} // Removed this line
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
