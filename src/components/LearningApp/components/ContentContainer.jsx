import React from 'react';
import ReactPlayer from 'react-player';
import '../style.css'
import { Layout, Row, Col } from 'antd';

import ContentHeader from './ContentHeader';
const { Content } = Layout;

const ContentContainer = (props) => {
    
    const levelNumber = props.stateLevelNumber;
    const lessonNumber = props.stateLessonNumber;
    const level = props.data[levelNumber - 1];

    const lesson = Object.entries(level).sort()[lessonNumber - 1][1];
    
    
    const lessonContent = lesson.content.split(/\n/g);

    return (
        <Layout className="site-layout">
          
          <ContentHeader toggle={props.toggle} />
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              maxHeight: '100vh',
              overflow: 'scroll'
            }}
          >
            <h1 style={{fontSize: "1.8rem", fontWeight: "700"}}>Lesson {lessonNumber}. {lesson.title}</h1>
            <ReactPlayer url={lesson.link} width={"100%"} height={"170px"}/>
            <Row justify="start">
              <Col>
                {
                  lessonContent.map(line => (
                    <h1 className="content-line">{line}</h1>
                  ))
                }
              </Col>
            </Row>
          </Content>
        </Layout>
    )
}

export default ContentContainer;