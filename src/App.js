import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import ReactGA from "react-ga";

import "./styles/reset.scss";
import "./styles/general.scss";
import "./styles/themes.scss";

import SettingsState from "./context/settings/SettingsState";
import SongsState from "./context/songs/SongsState";

import Navbar from "./layout/navbar/Navbar"
import Home from "./pages/home/Home"
import Songs from "./pages/songs/Songs"
import Song from "./pages/songs/Song"
import Search from "./pages/songs/Search"
import Settings from "./pages/settings/Settings"
import About from "./pages/about/About"
import NotFound from "./pages/not-found/NotFound"

const history = createBrowserHistory();
ReactGA.initialize("UA-103619462-3");
history.listen((location) => {
  ReactGA.pageview(location.pathname + location.search);
});

const App = () => {
  return (
    <SettingsState>
      <SongsState>
        <Router history={history}>
          <main>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/songs" exact component={Songs}></Route>
              <Route path="/songs/search" exact component={Search}></Route>
              <Route path="/songs/:slug" exact component={Song}></Route>
              <Route path="/settings" exact component={Settings}></Route>
              <Route path="/about" exact component={About}></Route>
              <Route component={NotFound}></Route>
            </Switch>
            <Navbar></Navbar>
          </main>
        </Router>
      </SongsState>
    </SettingsState>
  );
}

export default App;
