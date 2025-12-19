import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*", // Áp dụng cho mọi con bot (Googlebot, Bingbot...)
      allow: "/", // Cho phép truy cập toàn bộ trang web
    },
    sitemap: "https://luongcuc.soft.io.vn/sitemap.xml", // Đường dẫn đến sitemap bạn vừa tạo
  };
}
