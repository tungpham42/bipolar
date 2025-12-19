import Types from "@/pages/Types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phân Loại",
  description: "Phân Loại chứng Rối Loạn Cảm Xúc Lưỡng Cực.",
  openGraph: {
    title: "Phân Loại",
    description: "Phân Loại chứng Rối Loạn Cảm Xúc Lưỡng Cực.",
    url: "https://luongcuc.soft.io.vn/phan-loai",
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

export default function TypesPage() {
  return <Types />;
}
