import React, { useContext } from 'react';
import { Layout, Row, Col } from 'antd';

// SVG's
import PremiumSymbol from '../../../assets/premium-symbol.svg';
import DialogVideos from '../../../assets/premium-svgs/dialogue-videos.svg';
import ComprehensionQuizzes from '../../../assets/premium-svgs/comprehension-quizze.svg';
import PremiumLesson from '../../../assets/premium-svgs/premium-lesson.svg';
import Certificate from '../../../assets/premium-svgs/certificate-course.svg';
import StudySupport from '../../../assets/premium-svgs/study-support.svg';
import LessonNote from '../../../assets/premium-svgs/lesson-note.svg'
import { AppContext } from '../../../AppContext';

const Premium = () => {
    const AppState = useContext(AppContext)
    const titleStyle = {marginTop: "5%", color: "#030d51", fontSize: "1.2rem", fontWeight: "700"}

    return (
        <Layout>
            <Row justify="center" style={{marginTop: "10%"}}>
                {
                    AppState.width > 850 
                    ?
                    <Col span={12} style={{borderTop: "dotted 1px grey"}}>
                        <h1 style={{marginTop: "5%", fontWeight: "bold", color: "#35509a", fontSize: "1.6rem"}}>Our Premium Membership includes</h1>
                        <img src={PremiumSymbol} style={{marginTop: "2.5%"}} alt="premium symbol" />
                    </Col>
                    :
                    <Col span={24} style={{borderTop: "dotted 1px grey"}}>
                        <h1 style={{marginTop: "5%", fontWeight: "bold", color: "#35509a", fontSize: "1.6rem"}}>Our Premium Membership includes</h1>
                        <img src={PremiumSymbol} style={{marginTop: "2.5%"}} alt="premium symbol" />
                    </Col>
                }
            </Row>
            {
                AppState.width > 872
                ?
                <Layout>
                    <Row justify="center" style={{marginTop: "2.5%"}}>
                        <Col sm={8} xxl={{span: 5}} style={{height: "200px"}}>
                            <img src={DialogVideos} alt="sample dialog videos" />
                            <h1 style={titleStyle}>Sample dialogue videos</h1>
                        </Col>
                        <Col sm={8} xxl={{span: 5}}>
                            <img src={ComprehensionQuizzes} alt="comprehension quizzes" />
                            <h1 style={titleStyle}>Comprehensions quizzes</h1>
                        </Col>
                        <Col sm={8} xxl={{span: 5}}>
                            <img src={PremiumLesson} alt="hundreds of premium lessons" />
                            <h1 style={titleStyle}>Hundreds of premium lessons</h1>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col sm={8} xxl={{span: 5}}>
                            <img src={Certificate} alt="Certificates for each course" />
                            <h1 style={titleStyle}>Certificate for each course</h1>
                        </Col>
                        <Col sm={8} xxl={{span: 5}}>
                            <img src={StudySupport} alt="Lesson recommendations" />
                            <h1 style={titleStyle}>Lesson recommendations</h1>
                        </Col>
                        <Col sm={8} xxl={{span: 5}}>
                            <img src={LessonNote} alt="Downloadable lesson notes" />
                            <h1 style={titleStyle}>Downloadable lesson notes</h1>
                        </Col>
                    </Row>
                </Layout>
                :
                <Layout>
                    <Row justify="center" style={{marginTop: "2.5%"}}>
                        <Col span={12} style={{height: "200px"}}>
                            <img src={DialogVideos} alt="sample dialog videos" />
                            <h1 style={titleStyle}>Sample dialogue videos</h1>
                        </Col>
                        <Col span={12}>
                            <img src={ComprehensionQuizzes} alt="comprehension quizzes" />
                            <h1 style={titleStyle}>Comprehensions quizzes</h1>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col span={12}>
                            <img src={PremiumLesson} alt="hundreds of premium lessons" />
                            <h1 style={titleStyle}>Hundreds of premium lessons</h1>
                        </Col>
                        <Col span={12}>
                            <img src={Certificate} alt="Certificates for each course" />
                            <h1 style={titleStyle}>Certificate for each course</h1>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col span={12}>
                            <img src={StudySupport} alt="Lesson recommendations" />
                            <h1 style={titleStyle}>Lesson recommendations</h1>
                        </Col>
                        <Col span={12}>
                            <img src={LessonNote} alt="Downloadable lesson notes" />
                            <h1 style={titleStyle}>Downloadable lesson notes</h1>
                        </Col>
                    </Row>
                </Layout>
            }
        </Layout>
    )
}

export default Premium;