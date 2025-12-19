import Treatments from "@/pages/Treatments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cách Chữa Trị",
  description: "Cách Chữa Trị chứng Rối Loạn Cảm Xúc Lưỡng Cực.",
  openGraph: {
    title: "Cách Chữa Trị",
    description: "Cách Chữa Trị chứng Rối Loạn Cảm Xúc Lưỡng Cực.",
    url: "https://luongcuc.soft.io.vn/cach-chua-tri",
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

export default function TreatmentsPage() {
  return <Treatments />;
}
