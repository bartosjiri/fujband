import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import ReactGA from 'react-ga';

import './App.css';
import "./components/layout/themes/Themes.css";

import SettingsState from "./context/settings/SettingsState";
import SongsState from "./context/songs/SongsState";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Songs from "./components/pages/Songs";
import Song from "./components/pages/subpages/songs/Song";
import Search from "./components/pages/subpages/songs/Search";
import Settings from "./components/pages/Settings";
import About from "./components/pages/About";
import NotFound from "./components/pages/subpages/util/NotFound";

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
