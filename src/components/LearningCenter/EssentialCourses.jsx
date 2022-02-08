import { Layout, Col, Row } from 'antd';

import LevelCollapse from './LevelCollapse';

const EssentialCourses = () => {
    return (
        <Layout>
            <Row justify="center">
                <Col xs={{span: "18"}} sm={{span: "12"}} xl={{span: "5"}} style={{borderBottom: "solid 5px #030d51" }}>
                    <h1 style={{backgroundColor: "#030d51", color: "#fff", padding: ".5%", marginBottom: "0", fontWeight: "700"}}>Essential Korean Courses</h1>
                </Col>
                <Col xs={{span: "6"}} sm={{span: "12"}} xl={{span: "10"}} style={{borderBottom: "solid 5px #030d51" }}>
                    
                </Col>
            </Row>
            <LevelCollapse />
        </Layout>
    )
}

export default EssentialCourses;