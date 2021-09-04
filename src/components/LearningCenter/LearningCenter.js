import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { AppContext } from '../../AppContext';

// Components
import AppHeader from '../global/AppHeader';
import MobileAppHeader from '../global/MobileAppHeader';
import UserInfo from './components/UserInfo';
import EssentialCourses from './components/EssentialCourses';
import Footer from '../global/Footer';

const LearningCenter = () => {
    const AppState = useContext(AppContext)

    return (
        <div className="learning-center">
            { AppState.width > 970 ? <AppHeader /> : <MobileAppHeader /> }
            <UserInfo />
            <EssentialCourses />
            <Footer />
        </div>
    )
}

export default LearningCenter;