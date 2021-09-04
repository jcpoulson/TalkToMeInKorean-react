import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AppContext } from './AppContext';
import { getLevels, addLevel, addLesson, deleteLesson } from './firebase';

// Views / Components
import HomePage from './components/HomePage/HomePage';
import LearningCenter from './components/LearningCenter/LearningCenter';
import LearningApp from './components/LearningApp/LearningApp';
import SignIn from './components/SignIn/SignIn';
import ComingSoon from './components/ComingSoon/ComingSoon';

import useWindowDimensions from './components/global/useWindowDimensions';

const App = () => {
  const { width } = useWindowDimensions();
  const [user, setUser] = useState({})

  return (
    <div className="App">
      <BrowserRouter>
        <AppContext.Provider value={{width, user, setUser, getLevels}}>

          <Route exact path="/" component={HomePage} />
          <Route path="/learningcenter" component={LearningCenter} />
          <Route path="/curriculum/:level/:lesson" render={(props) => <LearningApp {...props} />} />
          <Route path="/signin" component={SignIn} />
          <Route path="/coming-soon" component={ComingSoon} />

        </AppContext.Provider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
