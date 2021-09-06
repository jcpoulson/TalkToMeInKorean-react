import React, { useContext } from 'react';
import { Layout, Row, Col, Avatar } from 'antd';
import { AppContext } from '../../AppContext';

import Hyunwoo from '../../assets/Hyunwoo-Sun.jpg';

// Components
import AppHeader from '../global/AppHeader';
import MobileAppHeader from '../global/MobileAppHeader';
import { NavLink } from 'react-router-dom';

const Profile = () => {
    const AppState = useContext(AppContext);
    const colStyle = {backgroundColor: "#fff", minHeight: "280px", padding: "2%"}

    return (
        <div className="profile">
            { AppState.width > 970 ? <AppHeader /> : <MobileAppHeader /> }
            <Layout>
                {
                    AppState.width > 970 ?
                        <Row justify="center" align="middle" gutter={1} style={{minHeight: "360px"}}>
                            <Col style={colStyle} xs={{span: "24"}} sm={{span: "8"}} xl={{span: "5"}}>
                                <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                    <Avatar style={{marginBottom: "10%"}} size={100} src={Hyunwoo} />
                                    <h1>{AppState.user.firstName} {AppState.user.lastName}</h1>
                                    <h4>{AppState.user.email}</h4>
                                </div>
                            </Col>
                            <Col style={colStyle} xs={{span: "24"}} sm={{span: "16"}} xl={{span: "10"}}>
                                <div style={{display: "flex", justifyContent: "center"}}>
                                    <a style={{backgroundColor: "darkblue", padding: "2%", marginTop: "25%", borderRadius: "30px"}}><strong><NavLink to="/profile-edit" style={{color: "white"}}>Edit Account Information</NavLink></strong></a>
                                </div>
                            </Col>
                        </Row>
                :
                        <Row justify="center" align="middle" gutter={1} style={{minHeight: "360px"}}>
                            <Col style={colStyle} xs={{span: "24"}} sm={{span: "8"}} xl={{span: "5"}}>
                                <div style={{marginLeft: "30%", marginRight: "30%", marginTop: "10%"}}>
                                    <Avatar style={{marginBottom: "10%"}} size={100} src={Hyunwoo} />
                                    <h1>{AppState.user.firstName} {AppState.user.lastName}</h1>
                                    <h4>{AppState.user.email}</h4>
                                </div>
                            </Col>
                            <Col style={colStyle} xs={{span: "24"}} sm={{span: "16"}} xl={{span: "10"}}>
                                <div style={{display: "flex", justifyContent: "center"}}>s
                                    <a style={{backgroundColor: "darkblue", padding: "2%", marginTop: "25%", borderRadius: "30px"}}><strong><NavLink to="/profile-edit" style={{color: "white"}}>Edit Account Information</NavLink></strong></a>
                                </div>
                            </Col>
                        </Row>
                } 
            </Layout>
        </div>
    )
}

export default Profile;