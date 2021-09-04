import react, { useContext } from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { AppContext } from '../../../AppContext';

const { Title } = Typography;


const GetStarted = () => {
    const AppState = useContext(AppContext)
    const style = {fontFamily: "Poppins, sans-serif"}

    return (
        <Row justify="center" style={{ backgroundColor: "rgb(215, 227, 242)", padding: "5.5%" }}>
            <Col>
                {
                    AppState.width > 700 ?
                <div>
                <Title style={style} level={6}>Want to learn Korean?</Title>
                <Title style={style} level={4}>We have everything you need! Learn with books, e-books and online courses.</Title>
                <Title level={4}>누구나 재미있게 한국어를 배울 수 있는 TTMIK</Title>
                <Button shape="round" style={{color: "#fff", backgroundColor: "#ffb803"}}>Get Started</Button>
                </div>
                :
                <div>
                <Title style={style} level={5}>Want to learn Korean?</Title>
                <Title style={style} level={5}>We have everything you need! Learn with books, e-books and online courses.</Title>
                <Title level={5}>누구나 재미있게 한국어를 배울 수 있는 TTMIK</Title>
                <Button shape="round" style={{color: "#fff", backgroundColor: "#ffb803"}}>Get Started</Button>
                </div>
                }
            </Col>
        </Row>
    )
}

export default GetStarted;