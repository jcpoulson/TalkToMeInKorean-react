import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
                    <Image onClick={showModal} src={MobileMenu} layout="fixed" width={30} height={30} className="mobile-menu-button" alt="mobile menu button"/>
                </Col>
                <Col className="mobile-app-header" span={18}>
                    <Link passHref href="/"><Image src={TTMIKLogo} layout="fixed" width={140} height={75} alt="TTMIK Logo" className="mobile-ttmik-logo" /></Link>
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
                    <Link passHref href="/">Sign Out</Link>
                </Button>
            ]
            :
            [
                <Button key="submit">
                    <Link passHref href="/signin">Sign Up</Link>
                </Button>,
                <Button key="submit" type="primary" >
                    <Link passHref href="/signin">Sign In</Link>
                </Button>
            ]}>
                <Row align="middle" className="sidebar-profile-info">
                    <Col span={12}><Image src={AppState.user.picture} height={100} width={100} position="fixed" className="sidebar-profile-pic" alt="Mobile Profile" /></Col>
                    { AppState.user.firstName ? <Col span={12}><h1>{AppState.user.firstName} {AppState.user.lastName}</h1></Col> : <Col span={12}><Link passHref href="/signin"><h1>Please Sign In</h1></Link></Col>}
                </Row>
                <Menu>
                <Menu.Item><Link passHref href="/coming-soon"><h3><b>Level Test</b></h3></Link></Menu.Item>
                        <Menu.Item><Link passHref href="/learningcenter"><h3><b>My Learning Center</b></h3></Link></Menu.Item>
                        <Menu.Item><Link passHref href="/coming-soon"><h3><b>Pricing</b></h3></Link></Menu.Item>
                        <Menu.Item><Link passHref href="/coming-soon"><h3><b>Courses</b></h3></Link></Menu.Item>
                        <Menu.Item><Link passHref href="/coming-soon"><h3><b>Bookstore</b></h3></Link></Menu.Item>
                        <Menu.Item><Link passHref href="/profile"><h3><b>My Profile</b></h3></Link></Menu.Item>
                    </Menu>
            </Modal>
        </Layout>


    )
}

export default MobileAppHeader;