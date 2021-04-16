import {Switch, Route, withRouter} from 'react-router-dom';
import React from 'react';
import './scss/App.scss';
import LoginPage from "./component/pages/LoginPage";
import MyAccountPage from "./component/pages/MyAccountPage";
import TeamPage from "./component/pages/TeamPage";
import {setup} from "./action/authActions";
import { connect } from 'react-redux';
import PrivateRoute from "./_helpers/PrivateRoute";
import NavbarNew from "./component/layout/navbar/MyNavbar";
import NotFound from "./component/pages/NotFound";
import HomePage from "./component/pages/HomePage";
import RegisterPage from "./component/pages/RegisterPage";

function App(props) {

    try {
        console.log("try setup");
        props.setupOn()
    } catch {
        console.log("pas authentifié")
    }
    // props.setupOn();
//Permet de récupérer les propriété history, comme pour un composant Route
//     const NavbarWithRouter = withRouter(NavbarContainer);
    const NavbarWithRouter = withRouter(NavbarNew);

      return (
          <React.Fragment>
              <NavbarWithRouter/>
              {/*  <Example/>*/}
                  <Switch>
                      <Route exact path='/' component={HomePage}/>
                      <Route exact path='/login' component={LoginPage}/>
                      <PrivateRoute exact path='/mon-compte' component={MyAccountPage}/>
                      <PrivateRoute path='/team/:teamId' component={TeamPage}/>
                      <Route exact path='/creer-un-compte' component={RegisterPage}/>
                      <Route component={NotFound}/>
                  </Switch>
          </React.Fragment>
      );
}

const mapDispatchToProps = dispatch => ({
    setupOn: () => dispatch(setup())
})
export default connect(
    null,
    mapDispatchToProps
)(App)
