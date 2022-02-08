import { useContext } from "react";
import { AppContext } from "../AppContext";

// Components
import AppHeader from "../components/Global/Header";
import MobileAppHeader from "../components/Global/MobileAppHeader";
import UserInfo from "../components/LearningCenter/UserInfo";
import EssentialCourses from "../components/LearningCenter/EssentialCourses";
import Footer from "../components/Global/Footer";

const LearningCenter = () => {
    const AppState = useContext(AppContext);

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