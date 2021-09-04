import React from 'react';
import { Layout, Row, Col } from 'antd';

const Footer = () => {
    const wordStyle = { color: "#fff"}
    const linkStyle = { color: "#fff", textDecoration: "underline"}

    return (
        <Layout style={{backgroundColor: "#101939"}}>
            <Row style={{marginTop: "5%"}} justify="center">
                <Col xl={{span: "15"}}><h1 style={wordStyle}>If you are looking to get in contact with me, you can find
                more information at the locations listed below</h1></Col>
            </Row>
            <Row style={{marginTop: "5%", borderTop: "dotted 1px white"}} justify="center">
                <Col xl={{span: "5"}} span={8}>
                    <a href="https://jcpoulson.github.io"><h1 style={linkStyle}>My Developer Site</h1></a>
                </Col>
                <Col xl={{span: "5"}} span={8}>
                    <a href="https://github.com/jcpoulson/TalkToMeInKorean-react"><h1 style={linkStyle}>Source code / GitHub Repository</h1></a>
                </Col>
                <Col xl={{span: "5"}} span={8}>
                    <a href="https://talktomeinkorean.com"><h1 style={linkStyle}>TTMIK</h1></a>
                </Col>
            </Row>
        </Layout>
    )
}

export default Footer;