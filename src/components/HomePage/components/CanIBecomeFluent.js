import React, { useContext } from 'react';
import { Layout, Col, Row } from 'antd';

import RunningDude from '../../../assets/running-dude.gif';
import { AppContext } from '../../../AppContext';

const CanIBecomeFluent = () => {
    const AppState = useContext(AppContext);

    return (
        <Layout>
            {
                AppState.width > 945 
                ? 
                <Row justify="center" style={{paddingTop: "5%"}}>
                    <Col span={8}>
                        <h1 style={{color: "#030d51", fontWeight: "700", fontSize: "1.625rem"}}>Can I become fluent just by learning here?</h1>
                        <p style={{color: "#333333", fontSize: "18px", marginTop: "5%", marginBottom: "15%", fontWeight: "500"}}>Yes! We recommend that you learn and practice at least 10 minutes a day. After a couple of months, you can hold short conversations. We have diverse courses for your specific goals.</p>
                        <a className="view-curriculum" href="somwhere">View Curriculum</a>
                    </Col>
                    <Col span={8}>
                        <img style={{borderRadius: "50%"}} src={RunningDude} alt="running dude" />
                    </Col>
                </Row>
                :
                <div>
                    <Row justify="center">
                        <img style={{borderRadius: "50%", width: "80%", marginTop: "10%"}} src={RunningDude} alt="running dude" />
                    </Row>
                    <Row justify="center">
                        <h1 style={{color: "#030d51", fontWeight: "700", fontSize: "1.625rem"}}>Can I become fluent just by learning here?</h1>
                        <p style={{color: "#333333", fontSize: "18px", marginTop: "5%", fontWeight: "500"}}>Yes! We recommend that you learn and practice at least 10 minutes a day. After a couple of months, you can hold short conversations. We have diverse courses for your specific goals.</p>
                        <a className="view-curriculum" href="somwhere">View Curriculum</a>
                    </Row>
                </div>
            }
        </Layout>
    )
}

export default CanIBecomeFluent;