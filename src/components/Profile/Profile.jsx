import React, { useContext, useState } from 'react';
import { Layout } from 'antd';
import { AppContext } from '../../AppContext';
import '../Profile/style.css'

// Components
import AppHeader from '../global/AppHeader';
import MobileAppHeader from '../global/MobileAppHeader';
import Footer from '../global/Footer';

import ProfileMenuBar from './components/ProfileMenuBar';
import AccountDetails from './components/AccountDetails';
import ProfileEdit from './components/ProfileEdit';
import Orders from './components/Orders';
import Membership from './components/Membership';
import Downloads from './components/Downloads';

const Profile = () => {
    const AppState = useContext(AppContext);
    const [selectedMenuItem, setSelectedMenuItem] = useState('')

    return (
        <div className="profile">
            { AppState.width > 970 ? <AppHeader /> : <MobileAppHeader /> }
            <ProfileMenuBar setSelectedMenuItem={setSelectedMenuItem} />
            <Layout>

            {/* Handles rendering of proper component based on state */}
            {(() => {
                switch (selectedMenuItem) {
                case 'My Account':
                    return <AccountDetails setSelectedMenuItem={setSelectedMenuItem} />
                case 'Orders':
                    return <Orders />
                case 'Membership':
                    return <Membership />
                case 'Downloads':
                    return <Downloads />
                case 'Edit':
                    return <ProfileEdit />
                default:
                    return <AccountDetails setSelectedMenuItem={setSelectedMenuItem} />
                }
            })()}

                <Footer className="profile-footer"/>
            </Layout>
        </div>
    )
}

export default Profile;