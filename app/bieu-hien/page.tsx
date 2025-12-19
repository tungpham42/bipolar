import Symptoms from "@/pages/Symptoms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biểu Hiện",
  openGraph: {
    title: "Biểu Hiện",
    description: "Những Biểu Hiện của chứng Rối Loạn Cảm Xúc Lưỡng Cực.",
    url: "https://luongcuc.soft.io.vn/bieu-hien",
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

export default function SymptomsPage() {
  return <Symptoms />;
}
