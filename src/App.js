import React from "react";
import { Switch, Route } from "react-router-dom";

//import Auth from "./Auth/Auth";

import HomePage from "./components/pages/HomePage";
import AppPage from "./components/pages/AppPage";
import Callback from "./components/templates/Home/Callback";

class App extends React.Component {
  constructor(props) {
    super(props);
    //this.auth = new Auth(this.props.history);
  }

  render() {
    return (
      <>
        {/*<Callback text="Hello" auth={this.auth} />
        <Link to="callback">Hey</Link>
        <button onClick={this.auth.login}>Log In</button>
        <Route
          path="/callback"
          render={props => <Callback text="Nice" auth={this.auth} {...props} />}
        /> */}
        <Switch>
          {/*<Route path="/" exact auth="big"  component={HomePage} />*/}
          {/* Changing path purely for dev of app page*/}
          <Route
            exact
            path="/"
            render={() => {
              //return <HomePage auth={this.auth} />;
              return <HomePage />;
            }}
          />
          <Route path="/app" component={AppPage} />
        </Switch>
      </>
    );
  }
}

export default App;
