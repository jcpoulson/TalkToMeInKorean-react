import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Row, Col, Layout } from 'antd';
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import './global.css'

// Icons
import ShoppingCartOutlined from '@ant-design/icons/ShoppingCartOutlined';
import BellOutlined from '@ant-design/icons/BellOutlined';
import TTMIKLogo from '../../assets/ttmik-logo.png';
import { AppContext } from '../../AppContext';

const AppHeader = () => {
    const AppState = useContext(AppContext);
    const style = { background: '#fff' };
    
    return (
        <Layout style={style}>
            <Row justify="center">
                <Col style={style} xl={{ span: 12}} xxl={{ span: 8}}></Col>
                <Col style={style} xl={{ span: 0}} xxl={{ span: 3}}></Col>
                <Col style={style} xl={{ span: 12 }} xxl={{ span: 5}}>
                    <Menu mode="horizontal" className="top-nav-menu">
                        { AppState.user.firstName ? <SubMenu title={`${AppState.user.firstName} ${AppState.user.lastName}`}>
                            <Menu.Item><NavLink to="/profile">User Profile</NavLink></Menu.Item>
                            <Menu.Item onClick={() => {
                                AppState.setUser({})
                                Cookies.remove('authenticatedUser')
                                }}><NavLink to="/">Sign Out</NavLink></Menu.Item>
                        </SubMenu> 
                        : 
                        <Menu.Item><NavLink to="/signin">Sign In</NavLink></Menu.Item>
                        }
                        <SubMenu title="Support">
                            
                                <Menu.Item><NavLink to="/coming-soon">FAQ</NavLink></Menu.Item>
                                <Menu.Item><NavLink to="/coming-soon">Contact Us</NavLink></Menu.Item>
                            
                            
                                <Menu.Item><NavLink to="/coming-soon">How to use the site</NavLink></Menu.Item>
                                <Menu.Item><NavLink to="/coming-soon">TTMIK Map</NavLink></Menu.Item>
                            
                        </SubMenu>
                        <Menu.Item icon={<ShoppingCartOutlined />}></Menu.Item>
                        <Menu.Item icon={<BellOutlined />}></Menu.Item>
                        
                    </Menu>
                </Col>
            </Row>
            <Row justify="center">
                <Col style={style} className="header-bottom-col" xl={{ span: 5}} xxl={{ span: 5}}><NavLink to="/"><img src={TTMIKLogo} className="ttmik-logo" alt="ttmik logo"/></NavLink></Col>
                <Col style={style} className="header-bottom-col" xl={{ span: 0}} xxl={{ span: 2}}></Col>
                <Col style={style} className="header-bottom-col header-bottom-menu" xl={{ span: 18}} xxl={{ span: 9}}>
                    <Menu mode="horizontal" className="header-bottom-menu bottom-nav-menu">
                        <Menu.Item><NavLink to="/coming-soon"><h3><b>Level Test</b></h3></NavLink></Menu.Item>
                        <Menu.Item><NavLink to="/learningcenter"><h3><b>My Learning Center</b></h3></NavLink></Menu.Item>
                        <Menu.Item><NavLink to="/coming-soon"><h3><b>Pricing</b></h3></NavLink></Menu.Item>
                        <Menu.Item><NavLink to="/coming-soon"><h3><b>Courses</b></h3></NavLink></Menu.Item>
                        <Menu.Item><NavLink to="/coming-soon"><h3><b>Bookstore</b></h3></NavLink></Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </Layout>
        
    )
}

// <img src={TTMIKLogo} className="ttmik-logo" alt="ttmik logo"/>

export default AppHeader;