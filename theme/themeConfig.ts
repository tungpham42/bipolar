import type { ThemeConfig } from "antd";

const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: "#2a9d8f",
    colorInfo: "#2a9d8f",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#e76f51",
    fontFamily: "'Nunito', sans-serif",
    fontSize: 16,
    borderRadius: 16,
    borderRadiusLG: 24,
    colorBgLayout: "#fdfbf7",
    colorBgContainer: "#ffffff",
  },
  components: {
    Layout: {
      headerBg: "rgba(255, 255, 255, 0.95)",
      bodyBg: "#fdfbf7",
    },
    Menu: {
      itemColor: "#666",
      itemSelectedColor: "#2a9d8f",
      itemHoverColor: "#2a9d8f",
      horizontalItemSelectedColor: "#2a9d8f",
      activeBarHeight: 4,
    },
    Card: {
      boxShadowTertiary: "0 4px 12px rgba(0,0,0,0.03)",
    },
    Button: {
      fontWeight: 600,
      controlHeightLG: 48,
    },
  },
};

export default themeConfig;
