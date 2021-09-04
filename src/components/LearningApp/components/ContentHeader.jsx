import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout } from 'antd';
import TTMIKLogo from '../../../assets/ttmik-logo.png';

const { Header } = Layout;

const ContentHeader = (props) => {
    // the prop data that this recieves is being prop drilled, and that might be okay because the data lives in LearningApp.js but see if I can clean up this state/data management a little bit
    const arrowStyle = {backgroundColor: "rgb(53, 80, 154)", borderRadius: "100%", padding: "1%", fontSize: "x-large", color: "white"}
    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
            {
                props.collapsed ? <a onClick={props.toggle} style={arrowStyle}>&#9776;</a> : <a onClick={props.toggle} style={arrowStyle}>&#9776;</a> 
            }
            <NavLink to="/"><img src={TTMIKLogo} style={{marginLeft: "8%", height: "80%"}} alt="Talk To Me In Korean Logo" /></NavLink>
        </Header>
    )
}

export default ContentHeader;