import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

function GuestLayout({ children }) {
  return (
    <Layout className="guest-layout">
      <Content className="guest-content">{children}</Content>
    </Layout>
  );
}

export default GuestLayout;


