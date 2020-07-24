import React from "react";
import {Container, Col, Row } from "react-bootstrap";
import './footer.css';
const FooterPage = () => {
    
    return (

      <Container className="footer">
        <Row>
          <Col>
            <span>Softtek &copy; 2020 React</span> < br />
            <span>Create by CDMX</span>
          </Col>
        </Row>
      </Container>

    );
}

export default FooterPage;