import React from 'react';
import { Card, Col, Row } from 'antd';

// Icons
import {
    LaptopOutlined,
    BarsOutlined,
    BookOutlined,
  } from '@ant-design/icons';

const CardGroup2 = () => {
    const style = {width: "360px", minHeight: "325px", backgroundColor: "#f0f0f0" }
    return (
        <div >
            <Row gutter={16}>
            <Col span={8}>
                <Card style={style} bordered={false}>
                <strong>This is simply new content for the second group of cards, I could use lorem ipsum but who cares about that LOL</strong>
                <div style={{paddingTop: "50%"}}>
                    <h1>Jordan B.</h1>
                    <h4 style={{color: "gray"}}><LaptopOutlined style={{width: "10%"}}/>Review for talktomeinkorean.com</h4>
                </div>
                </Card>
            </Col>
            <Col span={8}>
                <Card style={style} bordered={false}>
                <strong>This is simply new content for the second group of cards, I could use lorem ipsum but who cares about that LOL</strong>
                <div style={{paddingTop: "50%"}}>
                    <h1>Natalia</h1>
                    <h4 style={{color: "gray"}}><BarsOutlined style={{width: "10%"}}/>Review for TTMIK Level 1 Compilation</h4>
                </div>
                </Card>
            </Col>
            <Col span={8}>
                <Card style={style} bordered={false}>
                <strong>This is simply new content for the second group of cards, I could use lorem ipsum but who cares about that LOL</strong>
                <div style={{paddingTop: "50%"}}>
                    <h1>Sasha G.</h1>
                    <h4 style={{color: "gray"}}><BookOutlined style={{width: "10%"}}/>Review for My First 500 Korean Words</h4>
                </div>
                </Card>
            </Col>
            </Row>
        </div>
    )
}

export default CardGroup2;