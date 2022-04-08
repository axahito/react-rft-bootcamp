import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function GuestLayout({ children }) {
  return (
    <Container
      fluid
      style={{
        height: "100vh",
        backgroundColor: "#f7fafc",
        justifyContent: "center",
      }}
    >
      <Row className="h-100">
        <Col
          className="d-flex"
          style={{
            display: "flex",
          }}
        >
          <Container
            className="align-middle px-0 h-75 my-auto shadow-sm"
            style={{
              width: "72rem",
              backgroundColor: "white",
            }}
          >
            <Row className="h-100">
              <Col
                xs={7}
                style={{
                  backgroundImage: `url("https://www.cekindo.com/wp-content/uploads/2016/10/local-pt-company-indonesia.jpg.webp")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></Col>
              <Col className="p-4 w-100 h-100 d-flex">{children}</Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default GuestLayout;
