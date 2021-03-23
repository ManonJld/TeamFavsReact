import {Switch, Route, withRouter} from 'react-router-dom';
import React from 'react';
import './App.scss';
import Navbar from "./component/layout/navbar/Navbar";
import LoginPage from "./component/pages/LoginPage";
import MyAccountPage from "./component/pages/MyAccountPage";
import TeamPage from "./component/pages/TeamPage";

function App() {
//Permet de récupérer les propriété history, comme pour un composant Route
    const NavbarWithRouter = withRouter(Navbar);
  return (
      <React.Fragment>
          <NavbarWithRouter/>
          <Switch>
              <Route path='/login' component={LoginPage}/>
              <Route path='/mon-compte' component={MyAccountPage}/>
              <Route path='/team' component={TeamPage}/>
          </Switch>
      </React.Fragment>
  );
}

export default App;
