import {Switch, Route, withRouter} from 'react-router-dom';
import React, {useEffect} from 'react';
import './App.scss';
import Navbar from "./component/layout/navbar/Navbar";
import LoginPage from "./component/pages/LoginPage";
import MyAccountPage from "./component/pages/MyAccountPage";
import TeamPage from "./component/pages/TeamPage";
import {loadUser} from "./action/authActions";
import {store} from "./_helpers/store";

function App() {
    // useEffect(() => {
    //     store.dispatch(loadUser());
    // })
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
