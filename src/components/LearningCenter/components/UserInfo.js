import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Row, Col, Avatar } from 'antd';
import { AppContext } from '../../../AppContext';

const UserInfo = () => {
    const AppState = useContext(AppContext)
    const colStyle = {backgroundColor: "#fff", border: "solid 1px #d7e3f2", minHeight: "280px", padding: "2%"}

    return (
        <Layout>
            <Row justify="center" align="middle" gutter={1} style={{minHeight: "360px"}}>
                <Col style={colStyle} xs={{span: "24"}} sm={{span: "8"}} xl={{span: "5"}}>
                    <Avatar style={{marginBottom: "10%"}} size={100} src={AppState.user.picture} />
                    <h1>{AppState.user.firstName} {AppState.user.lastName}</h1>
                    <h3><NavLink to="/profile-edit">Edit Profile</NavLink></h3>
                </Col>
                <Col style={colStyle} xs={{span: "24"}} sm={{span: "16"}} xl={{span: "10"}}>
                    <h1 style={{borderBottom: "dotted 2px grey", paddingBottom: "5%"}}>You are a <span style={{color: "gold"}}>Premium</span> Member.</h1>
                    <h1 style={{ marginTop: "10%"}}>You recently completed <span>"Some Level somewhere"</span></h1>
                    <a className="continue-learning" style={{backgroundColor: "#FFADAD"}} href="somwhere">Continue Learning</a>
                </Col>
            </Row>
        </Layout>
    )
}

export default UserInfo;