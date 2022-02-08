import { useContext, useState } from 'react';
import { Layout } from 'antd';
import { AppContext } from "../AppContext";

// Components
import AppHeader from '../components/Global/Header';
import MobileAppHeader from '../components/Global/MobileAppHeader';
import Footer from '../components/Global/Footer';

import ProfileMenuBar from '../components/Profile/ProfileMenuBar';
import AccountDetails from '../components/Profile/AccountDetails';
import ProfileEdit from '../components/Profile/ProfileEdit';
import Orders from '../components/Profile/Orders';
import Membership from '../components/Profile/Membership';
import Downloads from '../components/Profile/Downloads';

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