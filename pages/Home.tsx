"use client";

import { Typography, Card, Row, Col, Statistic, Divider, Button } from "antd";
import { ArrowRightOutlined, HeartFilled } from "@ant-design/icons";
import Link from "next/link";

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          background: "linear-gradient(135deg, #e0f7fa 0%, #fffbe6 100%)",
          padding: 40,
          borderRadius: 24,
          marginBottom: 32,
          textAlign: "center",
        }}
      >
        <Title level={1} style={{ color: "#264653", marginBottom: 8 }}>
          Hiểu về Rối loạn Lưỡng cực
        </Title>
        <Paragraph
          style={{ fontSize: "18px", maxWidth: 700, margin: "0 auto 24px" }}
        >
          Bạn không đơn độc. Chúng tôi ở đây để cung cấp thông tin y khoa chính
          xác, lời khuyên hữu ích và sự hỗ trợ ấm áp cho hành trình của bạn.
        </Paragraph>
        <Link href="/bieu-hien">
          <Button
            type="primary"
            size="large"
            shape="round"
            icon={<ArrowRightOutlined />}
          >
            Tìm hiểu ngay
          </Button>
        </Link>
      </div>

      <Title level={3} style={{ textAlign: "center", marginBottom: 32 }}>
        Các trạng thái cảm xúc
      </Title>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          <Card
            className="hover-card"
            title={<span style={{ color: "#e76f51" }}>Hưng cảm (Mania)</span>}
            bordered={false}
            style={{ background: "#fff5f5", height: "100%" }}
          >
            <Paragraph>
              Cảm thấy hưng phấn, tràn đầy năng lượng, ngủ ít, suy nghĩ dồn dập
              và hành động bốc đồng.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card
            className="hover-card"
            title={<span style={{ color: "#2a9d8f" }}>Bình ổn (Stable)</span>}
            bordered={false}
            style={{ background: "#f0fdf4", height: "100%" }}
          >
            <Paragraph>
              Tâm trạng cân bằng. Bạn có thể sinh hoạt, làm việc và duy trì các
              mối quan hệ một cách bình thường.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card
            className="hover-card"
            title={
              <span style={{ color: "#457b9d" }}>Trầm cảm (Depression)</span>
            }
            bordered={false}
            style={{ background: "#f0f9ff", height: "100%" }}
          >
            <Paragraph>
              Cảm giác buồn bã sâu sắc, mất hứng thú với sở thích cũ, mệt mỏi và
              bi quan về cuộc sống.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      <Divider style={{ margin: "48px 0" }} />

      <div
        style={{
          textAlign: "center",
          background: "white",
          padding: 32,
          borderRadius: 24,
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        }}
      >
        <Title level={4} style={{ marginTop: 0 }}>
          <HeartFilled style={{ color: "#e76f51" }} /> Số liệu tham khảo
        </Title>
        <Row gutter={16}>
          <Col span={12}>
            <Statistic
              title="Dân số ảnh hưởng"
              value={"1-3%"}
              styles={{ content: { color: "#2a9d8f", fontWeight: "bold" } }}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Tuổi khởi phát trung bình"
              value={25}
              styles={{ content: { color: "#2a9d8f", fontWeight: "bold" } }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
