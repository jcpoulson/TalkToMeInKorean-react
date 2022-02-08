import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { Row, Col, Layout } from 'antd';
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';

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
                            <Menu.Item><Link href="/profile">User Profile</Link></Menu.Item>
                            <Menu.Item onClick={() => {
                                AppState.setUser({})
                                Cookies.remove('authenticatedUser')
                                }}><Link href="/">Sign Out</Link></Menu.Item>
                        </SubMenu> 
                        : 
                        <Menu.Item><Link href="/signin">Sign In</Link></Menu.Item>
                        }
                        <SubMenu title="Support">
                            
                                <Menu.Item><Link href="/coming-soon">FAQ</Link></Menu.Item>
                                <Menu.Item><Link href="/coming-soon">Contact Us</Link></Menu.Item>
                            
                            
                                <Menu.Item><Link href="/coming-soon">How to use the site</Link></Menu.Item>
                                <Menu.Item><Link href="/coming-soon">TTMIK Map</Link></Menu.Item>
                            
                        </SubMenu>
                        <Menu.Item icon={<ShoppingCartOutlined />}></Menu.Item>
                        <Menu.Item icon={<BellOutlined />}></Menu.Item>
                        
                    </Menu>
                </Col>
            </Row>
            <Row justify="center">
                <Col style={style} className="header-bottom-col" xl={{ span: 5}} xxl={{ span: 5}}><Link href="/"><Image src={TTMIKLogo} width={140} height={75} className="ttmik-logo" layout="fixed" alt="ttmik logo"/></Link></Col>
                <Col style={style} className="header-bottom-col" xl={{ span: 0}} xxl={{ span: 2}}></Col>
                <Col style={style} className="header-bottom-col header-bottom-menu" xl={{ span: 18}} xxl={{ span: 9}}>
                    <Menu mode="horizontal" className="header-bottom-menu bottom-nav-menu">
                        <Menu.Item><Link href="/coming-soon"><h3><b>Level Test</b></h3></Link></Menu.Item>
                        <Menu.Item><Link href="/learningcenter"><h3><b>My Learning Center</b></h3></Link></Menu.Item>
                        <Menu.Item><Link href="/coming-soon"><h3><b>Pricing</b></h3></Link></Menu.Item>
                        <Menu.Item><Link href="/coming-soon"><h3><b>Courses</b></h3></Link></Menu.Item>
                        <Menu.Item><Link href="/coming-soon"><h3><b>Bookstore</b></h3></Link></Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </Layout>
        
    )
}

// <img src={TTMIKLogo} className="ttmik-logo" alt="ttmik logo"/>

export default AppHeader;