import {Switch, Route, withRouter} from 'react-router-dom';
import React from 'react';
import './css/app.min.css';
import LoginPage from "./component/pages/LoginPage";
import MyAccountPage from "./component/pages/MyAccountPage";
import TeamPage from "./component/pages/TeamPage";
import {setup} from "./action/authActions";

import NavbarContainer from "./component/layout/navbar/NavbarContainer";
import { connect } from 'react-redux';
import PrivateRoute from "./_helpers/PrivateRoute";

function App(props) {
    // useEffect(() => {
    //     store.dispatch(loadUser());
    // })
    try {
        console.log("try setup");
        props.setupOn()
    } catch {
        console.log("pas authentifié")
    }
//Permet de récupérer les propriété history, comme pour un composant Route
    const NavbarWithRouter = withRouter(NavbarContainer);

      return (
          <React.Fragment>
              <NavbarWithRouter/>
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
