import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';
import { AppContext } from '../../AppContext';
import { Row, Col, Layout, Modal, Button, Menu } from 'antd';
import BellOutlined from '@ant-design/icons/BellOutlined';

import MobileMenu from '../../assets/mobile-menu.png';
import TTMIKLogo from '../../assets/ttmik-logo.png';



const MobileAppHeader = () => {
    const AppState = useContext(AppContext)

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <Layout style={{ backgroundColor: '#fff'}}>
            <Row justify="space-between" align="middle">
                <Col className="mobile-app-header" span={3}>
                    <img onClick={showModal} src={MobileMenu} className="mobile-menu-button" alt="mobile menu button"/>
                </Col>
                <Col className="mobile-app-header" span={18}>
                    <NavLink to="/"><img src={TTMIKLogo} alt="TTMIK Logo" className="mobile-ttmik-logo" /></NavLink>
                </Col>
                <Col className="mobile-app-header" span={3}>
                    <BellOutlined className="bell-icon"/>
                </Col>
            </Row>
            
            <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={AppState.user.firstName ?
            [
                <Button key="submit" type="primary" onClick={() => {
                    AppState.setUser({})
                    Cookies.remove('authenticatedUser')
                }}>
                    <NavLink to="/">Sign Out</NavLink>
                </Button>
            ]
            :
            [
                <Button >
                    <NavLink to="/signin">Sign Up</NavLink>
                </Button>,
                <Button key="submit" type="primary" >
                    <NavLink to="/signin">Sign In</NavLink>
                </Button>
            ]}>
                <Row align="middle" className="sidebar-profile-info">
                    <Col span={12}><img src={AppState.user.picture} className="sidebar-profile-pic" alt="Mobile Profile" /></Col>
                    { AppState.user.firstName ? <Col span={12}><h1>{AppState.user.firstName} {AppState.user.lastName}</h1></Col> : <Col span={12}><NavLink to="/signin"><h1>Please Sign In</h1></NavLink></Col>}
                </Row>
                <Menu>
                <Menu.Item><NavLink to="/coming-soon"><h3><b>Level Test</b></h3></NavLink></Menu.Item>
                        <Menu.Item><NavLink to="/learningcenter"><h3><b>My Learning Center</b></h3></NavLink></Menu.Item>
                        <Menu.Item><NavLink to="/coming-soon"><h3><b>Pricing</b></h3></NavLink></Menu.Item>
                        <Menu.Item><NavLink to="/coming-soon"><h3><b>Courses</b></h3></NavLink></Menu.Item>
                        <Menu.Item><NavLink to="/coming-soon"><h3><b>Bookstore</b></h3></NavLink></Menu.Item>
                        <Menu.Item><NavLink to="/profile"><h3><b>My Profile</b></h3></NavLink></Menu.Item>
                    </Menu>
            </Modal>
        </Layout>


    )
}

export default MobileAppHeader;