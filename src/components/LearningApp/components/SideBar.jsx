import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../../AppContext';
import { useLocation } from 'react-router';
import { Layout, Menu } from 'antd';
import {
    CheckCircleFilled,
    CheckCircleOutlined,
    LeftCircleFilled,
    RightCircleFilled
  } from '@ant-design/icons';

const { Sider } = Layout;

const SideBar = (props) => {
    const location = useLocation();
    const AppState = useContext(AppContext);
    const levelNumber = location.pathname.split('/')[2].replace(/\D/g, "");
    const lessonNumber = location.pathname.split('/')[3].replace(/\D/g, "");

    const level = props.data[levelNumber - 1];
    const levelLessons = Object.entries(level).sort();

    const handleSidebarStyle = () => {
        if (AppState.width > 700 && !props.collapsed) {
            const style = {overflow: 'auto', height: '110vh', backgroundColor: "#35509a"}
            return style
        } else if (AppState.width <= 700 && props.collapsed) {
            const style = {display: "none"}
            return style
        }
    }

    return (
        <Sider width={"350px"} collapsedWidth={props.mobileSidebarRender()} style={handleSidebarStyle()} 
            trigger={null} collapsible collapsed={props.collapsed} >
                <Menu mode="inline" defaultSelectedKeys={[`${lessonNumber}`]}>
                    
                {/* Header Menu Item */}
                <Menu.Item style={{backgroundColor: "#35509a", padding: "15%"}}>{!props.collapsed ? <h1 style={{color: "white"}}>Level {levelNumber}</h1> : <h1 style={{color: "white"}}></h1>}</Menu.Item>

                {
                    levelLessons.map((lesson, index) => (
                        <Menu.Item key={index + 1} onClick={() => props.handleLessonChange(index + 1)} icon={<CheckCircleOutlined />}>
                            Lesson {index + 1}. {lesson[1].title}
                        </Menu.Item>  
                    ))
                }
                    

                </Menu>
        </Sider>
    )
}


export default SideBar;

{/* <NavLink to={`/curriculum/level-${levelNumber}/lesson-${index + 1}`}></NavLink> */}