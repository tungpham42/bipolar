import Resources from "@/pages/Resources";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Địa Chỉ Hỗ Trợ",
  description: "Địa Chỉ Hỗ Trợ uy tín của chứng Rối Loạn Cảm Xúc Lưỡng Cực.",
  openGraph: {
    title: "Địa Chỉ Hỗ Trợ",
    description: "Địa Chỉ Hỗ Trợ uy tín của chứng Rối Loạn Cảm Xúc Lưỡng Cực.",
    url: "https://luongcuc.soft.io.vn/dia-chi",
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

export default function ResourcesPage() {
  return <Resources />;
}
