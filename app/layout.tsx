import React from "react";
import { ConfigProvider } from "antd";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import themeConfig from "@/theme/themeConfig";
import MainLayout from "@/components/MainLayout"; // We import the shell component
import "./globals.css";
import { Metadata } from "next";

// You can add global font imports here via next/font/google if desired

export const metadata: Metadata = {
  title: {
    template: "%s | Rối Loạn Cảm Xúc Lưỡng Cực",
    default: "Cổng Thông Tin Rối Loạn Cảm Xúc Lưỡng Cực",
  },
  description: "Nền tảng cung cấp thông tin Rối Loạn Cảm Xúc Lưỡng Cực.",
  keywords: [
    "Bảo hiểm",
    "Tra cứu bảo hiểm",
    "Bảo lãnh viện phí",
    "Thuật ngữ bảo hiểm",
    "Bồi thường",
  ],
  authors: [{ name: "Phạm Tùng", url: "https://soft.io.vn" }],
  openGraph: {
    title: {
      template: "%s | Rối Loạn Cảm Xúc Lưỡng Cực",
      default: "Cổng Thông Tin Rối Loạn Cảm Xúc Lưỡng Cực",
    },
    description: "Nền tảng cung cấp thông tin Rối Loạn Cảm Xúc Lưỡng Cực.",
    url: "https://luongcuc.soft.io.vn",
    siteName: "Rối Loạn Cảm Xúc Lưỡng Cực",
    images: [
      {
        url: "https://luongcuc.soft.io.vn/1200x630.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body style={{ margin: 0, padding: 0, background: "#fdfbf7" }}>
        <StyledComponentsRegistry>
          <ConfigProvider theme={themeConfig}>
            {/* The Client Side Shell */}
            <MainLayout>{children}</MainLayout>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
