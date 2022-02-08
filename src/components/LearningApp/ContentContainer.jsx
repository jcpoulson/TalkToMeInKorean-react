import ReactPlayer from 'react-player';
import { Layout, Row, Col } from 'antd';

import ContentHeader from './ContentHeader';
const { Content } = Layout;

const ContentContainer = (props) => {
    const levelNumber = parseInt(props.stateLevelNumber)
    const lessonNumber = parseInt(props.stateLessonNumber)
    const level = props.data[levelNumber - 1] || { };
    // This is giving me the issue much like the Sidebar was, right now it seems to be working but who knows it could give issues again (refreshes)
    const lesson = Object.entries(level).sort()[lessonNumber - 1][1] || { content: "Filler Content" };
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