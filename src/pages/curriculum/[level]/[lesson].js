import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Layout } from 'antd';
import { AppContext } from '../../../AppContext';

// Components
import SideBar from '../../../components/LearningApp/SideBar';
import ContentContainer from '../../../components/LearningApp/ContentContainer';


const LearningApp = () => {
  const AppState = useContext(AppContext);
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [levelParam, setLevelParam] = useState(1)
  const [lessonParam, setLessonParam] = useState(1)

    const initLevelData = () => {
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

  const [levelData, setLevelData] = useState(initLevelData())


  useEffect(async () => {
    const levelData = await AppState.getLevels();
    setLevelData(levelData)
    if (router.isReady) {
      setLevelParam(router.query.level);
      setLessonParam(router.query.lesson)
    }
  }, [router.isReady, router.query.level, router.query.lesson])


  const mobileSidebarRender = () => {
    if (AppContext.width > 600) {
        return 50;
    } else if (AppContext.width < 600) {
        return 0;
    }
}

  const toggle = () => {
    setCollapsed(!collapsed)
  }

    return (
      <Layout>
        <SideBar mobileSidebarRender={mobileSidebarRender} collapsed={collapsed} data={levelData} />
        <ContentContainer toggle={toggle} stateLessonNumber={lessonParam} stateLevelNumber={levelParam} data={levelData} />
        
      </Layout>
    );
}

export default LearningApp;