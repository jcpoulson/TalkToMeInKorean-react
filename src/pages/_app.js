import { useState, useEffect } from "react";
import { getLevels, signIn, persistUser, signUp, updateUser, uploadImage } from '../firebase';
import Cookies from "js-cookie";

// Stylesheets
import "../index.css";
import "../components/Global/global.css";
import "../components/Home/style.css";
import "../components/LearningCenter/style.css";
import "../components/SignIn/style.css";
import "../components/LearningApp/style.css";
import "../components/Profile/style.css";
import 'antd/dist/antd.css';

import { AppContext } from "../AppContext";
import useWindowSize from "../components/Global/useWindowSize";

function MyApp({ Component, pageProps }) {
  const width = useWindowSize().width;
  const [user, setUser] = useState({})
  const userCookie = Cookies.get('authenticatedUser')

  useEffect(async () => {
    if (userCookie) {
      const user = await persistUser(userCookie);
      setUser(user)
    }
  }, [])

  return (
    <AppContext.Provider value={{width, user, setUser, getLevels, signIn, signUp, updateUser, uploadImage}}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
