import Living from "@/pages/Living";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sống Chung",
  openGraph: {
    title: "Sống Chung",
    description:
      "Hướng dẫn cách Sống Chung với người bị chứng Rối Loạn Cảm Xúc Lưỡng Cực.",
    url: "https://luongcuc.soft.io.vn/song-chung",
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

export default function LivingPage() {
  return <Living />;
}
