import React, { useContext } from 'react';
import { Layout, Row, Col, Carousel } from 'antd';
import { AppContext } from '../../../AppContext';

import textBook1 from '../../../assets/textbooks/ttmikbooks_01.jpg';
import textBook2 from '../../../assets/textbooks/ttmikbooks_02.jpg';
import textBook3 from '../../../assets/textbooks/ttmikbooks_03.jpg';
import textBook4 from '../../../assets/textbooks/ttmikbooks_04.jpg';
import textBook5 from '../../../assets/textbooks/ttmikbooks_05.jpg';

const Textbook = () => {
    const AppState = useContext(AppContext)

    return (
        <div>
            <Layout>
            <Row justify="center">
                <Col xl={{span: 14}} style={{marginTop: "5%"}}>
                    <h1 style={{fontWeight: "bold", fontSize: "1.625rem", color: "#030d51"}}>Study with our popular Korean textbooks</h1>
                    <h3 style={{fontWeight: "bold", color: "#030d51"}}>We also have these beautiful paper books that you can use along with our online courses!</h3>
                </Col>
                <Col span={8}>
                    
                </Col>
            </Row>
            {
                AppState.width > 1400
                ?
                
                <div className="text-book-carousel">
                    <Carousel style={{width: "55%", marginLeft: "auto", marginRight: "auto", marginTop: "2.5%", marginBottom: "2.5%"}} autoplay>
                        <img src={textBook1} alt="textbook 1" />
                        <img src={textBook2} alt="textbook 2" />
                        <img src={textBook3} alt="textbook 3" />
                        <img src={textBook4} alt="textbook 4" />
                        <img src={textBook5} alt="textbook 5" /> 
                    </Carousel>
                </div>
                
                :
                
                <div className="text-book-carousel">
                    <Carousel style={{width: "80%", marginLeft: "auto", marginRight: "auto", marginTop: "2.5%", marginBottom: "2.5%"}} autoplay>
                        <img src={textBook1} alt="textbook 1" />
                        <img src={textBook2} alt="textbook 2" />
                        <img src={textBook3} alt="textbook 3" />
                        <img src={textBook4} alt="textbook 4" />
                        <img src={textBook5} alt="textbook 5" /> 
                    </Carousel>
                </div>
                
            }
        </Layout>
        </div>
    )
}

export default Textbook;