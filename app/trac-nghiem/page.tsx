import SelfTest from "@/pages/SelfTest";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trắc nghiệm MDQ",
  description: "Trắc nghiệm MDQ cho chứng Rối Loạn Cảm Xúc Lưỡng Cực.",
  openGraph: {
    title: "Trắc nghiệm MDQ",
    description: "Trắc nghiệm MDQ cho chứng Rối Loạn Cảm Xúc Lưỡng Cực.",
    url: "https://luongcuc.soft.io.vn/trac-nghiem",
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

export default function SelfTestPage() {
  return <SelfTest />;
}
