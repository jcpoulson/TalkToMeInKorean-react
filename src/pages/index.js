import { useContext } from "react";
import { AppContext } from "../AppContext";

// Components
import AppHeader from "../components/Global/Header";
import MobileAppHeader from "../components/Global/MobileAppHeader";
import Banner from "../components/Home/Banner";
import GetStarted from "../components/Home/GetStarted";
import WhyTTMIK from "../components/Home/WhyTTMIK";
import CanIBecomeFluent from "../components/Home/CanIBecomeFluent";
import Premium from "../components/Home/Premium";
import Cost from "../components/Home/Cost";
import Textbook from "../components/Home/Textbook";
import Footer from "../components/Global/Footer";

const Home = () => {
  const AppState = useContext(AppContext);

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

export default Home;
