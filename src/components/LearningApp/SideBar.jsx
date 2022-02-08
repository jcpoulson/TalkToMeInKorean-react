import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { useRouter } from 'next/router';
import { Layout, Menu } from 'antd';
import {
    CheckCircleOutlined
  } from '@ant-design/icons';

const { Sider } = Layout;

const SideBar = (props) => {
    const router = useRouter();
    const AppState = useContext(AppContext);
    const levelNumber = parseInt(router.asPath.split('/')[2].replace(/\D/g, ""));
    const lessonNumber = parseInt(router.asPath.split('/')[3].replace(/\D/g, ""));

    const level = props.data[levelNumber - 1] || { };
    // For some odd reason this is getting passed an undefined object at first which is why it's erroring out
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
                        <Menu.Item key={index + 1} onClick={() => router.push(`/curriculum/${levelNumber}/${index + 1}`)} icon={<CheckCircleOutlined />}>
                            Lesson {index + 1}. {lesson[1].title}
                        </Menu.Item>  
                    ))
                }
                    

                </Menu>
        </Sider>
    )
}


export default SideBar;