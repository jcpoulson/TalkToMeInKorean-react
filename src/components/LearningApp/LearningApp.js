import React from 'react';
import './style.css'
import { Layout } from 'antd';
import { AppContext } from '../../AppContext';

// Components
import SideBar from './components/SideBar';
import ContentContainer from './components/ContentContainer';


class LearningApp extends React.Component {
  static contextType = AppContext;
  
  initLevelData = () => {
    let lessonData = [];
    for (let i = 0; i < 10; i++) {
      let level = {};
      for (let i = 0; i < 31; i++) {
        let lesson = {
          title: "",
          link: "",
          content: ""
        }
        level[`lesson${i + 1}`] = lesson
      }
      lessonData.push(level)
    }
    return lessonData;
  }

  state = {
    collapsed: false,
    level: parseInt(this.props.history.location.pathname.split('/')[2].replace(/\D/g, "")),
    lesson: parseInt(this.props.history.location.pathname.split('/')[3].replace(/\D/g, "")),
    levelData: this.initLevelData()
  }

  componentDidMount = async () => {
    const levelData = await this.context.getLevels();
    this.setState({...this.state, levelData: levelData})
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleLessonChange = (lessonNumber) => {
    this.setState({...this.state, lesson: lessonNumber})
  }

  mobileSidebarRender = () => {
    if (this.props.screenWidth > 600) {
        return 50;
    } else if (this.props.screenWidth < 600) {
        return 0;
    }
}

  render() {
    return (
      <Layout>
        <SideBar mobileSidebarRender={this.mobileSidebarRender} handleLessonChange={this.handleLessonChange} collapsed={this.state.collapsed} data={this.state.levelData}/>
        <ContentContainer toggle={this.toggle} stateLessonNumber={this.state.lesson} stateLevelNumber={this.state.level} data={this.state.levelData} />
        
      </Layout>
    );
  }
}

export default LearningApp;