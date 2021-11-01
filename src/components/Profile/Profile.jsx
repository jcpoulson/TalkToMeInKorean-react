import React, { useContext } from 'react';
import { Layout } from 'antd';
import { AppContext } from '../../AppContext';
import '../Profile/style.css'

// Components
import AppHeader from '../global/AppHeader';
import MobileAppHeader from '../global/MobileAppHeader';
import Footer from '../global/Footer';

import ProfileMenuBar from './components/ProfileMenuBar';
import AccountDetails from './components/AccountDetails';

const Profile = () => {
    const AppState = useContext(AppContext);

    return (
        <div className="profile">
            { AppState.width > 970 ? <AppHeader /> : <MobileAppHeader /> }
            <ProfileMenuBar />
            <Layout>
                <AccountDetails />
                <Footer className="profile-footer"/>
            </Layout>
        </div>
    )
}

export default Profile;