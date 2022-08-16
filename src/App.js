import React from "react";
import { Routes, Route } from "react-router-dom";

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
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/app" element={<AppPage />} />
        </Routes>
      </>
    );
  }
}

export default App;
