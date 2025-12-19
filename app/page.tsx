import Home from "@/pages/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang chủ | Lưỡng Cực",
  openGraph: {
    title: "Trang chủ | Lưỡng Cực",
    description:
      "Nền tảng cung cấp thông tin về chứng Rối Loạn Cảm Xúc Lưỡng Cực.",
    url: "https://baohiem.soft.io.vn",
    siteName: "Rối Loạn Cảm Xúc Lưỡng Cực",
    images: [
      {
        url: "https://luongcuc.soft.io.vn/1200x630.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function HomePage() {
  return <Home />;
}
