import { useContext } from 'react';
import Image from 'next/image';
import { Row, Layout, Carousel } from 'antd';
import WhyTTMIKPhoto from '../../assets/WhyTTMIK.png';

import CardGroup1 from './CardGroup1';
// import CardGroup2 from './CardGroup2';
import { AppContext } from '../../AppContext';


const WhyTTMIK = () => {
    const AppState = useContext(AppContext);

    return (
        <Layout style={{backgroundColor: "#fff"}}>
            <Row justify="center" style={{marginTop: "2.5%"}}>
                {
                    AppState.width > 1080 ? <Image src={WhyTTMIKPhoto} width={1200} height={500} position="fixed" alt="You can learn to speak Korean here" /> : <Image src={WhyTTMIKPhoto} height={1200} position="fixed" alt="You can learn to speak Korean here" />
                }
            </Row>
            <h1 style={{ fontSize: "1.6rem", color: "#35509a", fontWeight: "600", margin: "2%"}}>In the words of our learners</h1>
            <Carousel autoplay style={{width: "100%", paddingLeft: "15%", paddingRight: "15%", paddingBottom: "5%"}}>
                    <CardGroup1 />
                    <CardGroup1 />
            </Carousel>
        </Layout>
    )
}

export default WhyTTMIK;