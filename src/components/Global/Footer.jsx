import { Layout, Row, Col } from 'antd';

const Footer = () => {
    const wordStyle = { color: "#fff"}
    const linkStyle = { color: "#fff", textDecoration: "underline"}

    return (
        <Layout style={{backgroundColor: "#101939"}}>
            <Row style={{marginTop: "5%"}} justify="center">
                <Col xl={{span: "15"}}><h2 style={wordStyle}>If you are looking to get in contact with me, you can find
                more information at the locations listed below</h2></Col>
            </Row>
            <Row style={{marginTop: "5%", borderTop: "dotted 1px white"}} justify="center">
                <Col xl={{span: "5"}} span={8}>
                    <a href="https://jcpoulson.github.io"><h3 style={linkStyle}>My Developer Site</h3></a>
                </Col>
                <Col xl={{span: "5"}} span={8}>
                    <a href="https://github.com/jcpoulson/TalkToMeInKorean-react"><h3 style={linkStyle}>Source code / GitHub Repository</h3></a>
                </Col>
                <Col xl={{span: "5"}} span={8}>
                    <a href="https://talktomeinkorean.com"><h3 style={linkStyle}>TTMIK</h3></a>
                </Col>
            </Row>
        </Layout>
    )
}

export default Footer;