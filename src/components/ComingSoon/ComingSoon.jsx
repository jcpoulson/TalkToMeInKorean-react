import react, { useContext } from 'react';
import { Layout, Row, Col, Avatar } from 'antd';
import { AppContext } from '../../AppContext';

// Components
import AppHeader from '../global/AppHeader';
import MobileAppHeader from '../global/MobileAppHeader';
import ProfilePic from '../../assets/profile-pic.JPG';

const ComingSoon = () => {
    const AppState = useContext(AppContext);
    const colStyle = {backgroundColor: "#fff", border: "solid 1px #d7e3f2", minHeight: "280px", padding: "2%"}

    return (
        <div className="coming-soon">
            { AppState.width > 970 ? <AppHeader /> : <MobileAppHeader /> }
            <Layout>
            <Row justify="center" align="middle" gutter={1} style={{minHeight: "360px", height: "100%"}}>
                <Col style={colStyle} xs={{span: "24"}} sm={{span: "8"}} xl={{span: "5"}}>
                    <Avatar style={{marginBottom: "10%"}} size={100} src={ProfilePic} />
                    <h1>Developer: Jonah Poulson</h1>
                    <h3><a href="https://github.com/jcpoulson" target="_blank">GitHub</a></h3>
                    <h3><a href="https://jcpoulson.github.io" target="_blank">Website</a></h3>
                </Col>
                <Col style={colStyle} xs={{span: "24"}} sm={{span: "16"}} xl={{span: "10"}}>
                    <h1 style={{borderBottom: "dotted 2px grey", paddingBottom: "5%"}}>Sorry, this section of the application is still being developed</h1>
                    <h3 style={{ marginTop: "10%"}}>Being completely honest, there is a pretty high possibility that this section won't be developed at all </h3>
                    <h3 style={{ marginTop: "10%"}}>All this application is meant to be, is a prototype of the Talk To Me In Korean website built using React.js</h3>
                    <h3 style={{ marginTop: "10%"}}>There is a possibility of this application being picked up by open source contributors or maybe Talk To Me In Korean might do something with it, you never know</h3>
                    <h3 style={{ marginTop: "10%"}}>Until more is known about the future of this application, please enjoy your stay</h3>
                </Col>
            </Row>
        </Layout>
        </div>
    )
}

export default ComingSoon;