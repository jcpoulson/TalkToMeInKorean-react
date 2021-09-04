import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import 'antd/dist/antd.css';
import '../HomePage/style.css';

// Components
import AppHeader from '../global/AppHeader';
import MobileAppHeader from '../global/MobileAppHeader';
import Banner from './components/Banner';
import GetStarted from './components/GetStarted';
import WhyTTMIK from './components/WhyTTMIK';
import CanIBecomeFluent from './components/CanIBecomeFluent';
import Premium from './components/Premium';
import Cost from './components/Cost';
import Textbook from './components/Textbook';
import Footer from '../global/Footer';

const HomePage = () => {
    const AppState = useContext(AppContext)

    return (
        <div className="home">
            { AppState.width > 970 ? <AppHeader /> : <MobileAppHeader /> }
            <Banner />
            <GetStarted />
            <WhyTTMIK />
            <CanIBecomeFluent />
            <Premium />
            <Cost />
            <Textbook />
            <Footer />
        </div>
    )
}

export default HomePage;