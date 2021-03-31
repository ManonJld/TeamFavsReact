import {Switch, Route, withRouter} from 'react-router-dom';
import React from 'react';
import './scss/App.scss';
import LoginPage from "./component/pages/LoginPage";
import MyAccountPage from "./component/pages/MyAccountPage";
import TeamPage from "./component/pages/TeamPage";
import {setup} from "./action/authActions";
import { connect } from 'react-redux';
import PrivateRoute from "./_helpers/PrivateRoute";
import NavbarNew from "./component/layout/navbar/NavbarNew";

function App(props) {

    try {
        console.log("try setup");
        props.setupOn()
    } catch {
        console.log("pas authentifié")
    }
//Permet de récupérer les propriété history, comme pour un composant Route
//     const NavbarWithRouter = withRouter(NavbarContainer);
    const NavbarWithRouter = withRouter(NavbarNew);

      return (
          <React.Fragment>
              <NavbarWithRouter/>
              {/*  <Example/>*/}
                  <Switch>
                      <Route path='/login' component={LoginPage}/>
                      <PrivateRoute path='/mon-compte' component={MyAccountPage}/>
                      <PrivateRoute path='/team/:teamId' component={TeamPage}/>
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
