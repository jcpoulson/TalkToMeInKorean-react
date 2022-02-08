import { useContext } from 'react';
import Image from 'next/image';
import { AppContext } from '../../AppContext';
import { Layout, Col, Row } from 'antd';

import costGraphic from '../../assets/cost-graphic.png';


const Cost = () => {
    const AppState = useContext(AppContext);

    return (
        <Layout style={{backgroundColor: "#FFF"}}>
            {
                AppState.width > 945 
                ? 
                <Row justify="center" style={{paddingTop: "5%"}}>
                    <Col span={8}>
                        <Image src={costGraphic} alt="running dude" />
                    </Col>
                    <Col span={8}>
                        <h1 style={{color: "#030d51", fontWeight: "700", fontSize: "1.625rem"}}>How much will it cost?</h1>
                        <p style={{color: "#333333", fontSize: "18px", marginTop: "5%", marginBottom: "15%", fontWeight: "500"}}>With the price of an average lunch in Seoul, you can have unlimited monthly access to hundreds of our online lessons and review materials.</p>
                        <a className="view-curriculum" style={{backgroundColor: "#FFADAD"}} href="somwhere">View Pricing</a>
                    </Col>
                </Row>
                :
                <div>
                    <Row justify="center">
                        <h1 style={{color: "#030d51", fontWeight: "700", fontSize: "1.625rem"}}>How much will it cost?</h1>
                        <p style={{color: "#333333", fontSize: "18px", marginTop: "5%", fontWeight: "500"}}>With the price of an average lunch in Seoul, you can have unlimited monthly access to hundreds of our online lessons and review materials.</p>
                        <a className="view-curriculum" style={{backgroundColor: "#FFADAD"}} href="somwhere">View Pricing</a>
                    </Row>
                    <Row justify="center">
                        <Image src={costGraphic} alt="running dude" />
                    </Row>
                </div>
            }
        </Layout>
    )
}

export default Cost;