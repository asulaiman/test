// Root entry point

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import * as React from "react";
import Helmet from "react-helmet";
import {hot} from "react-hot-loader";

import {Route, Switch} from "react-router-dom";

/* Local */

// Components
import {Provider} from 'react-redux';

// Global styles
import {GlobalStyles} from "@/global/styles";

// Routes
import routes from "@/data/routes";
import configureStore from "../reduxStore/store/configureStore";
import Nav from "./nav";

const store = configureStore();
// ----------------------------------------------------------------------------
const Root = () => (
    <div>
        <GlobalStyles/>
        <Helmet>
            <title>Test</title>
        </Helmet>
        <Nav/>
        <Provider store={store}>
            <Switch>
                {routes.map(route => (
                    <Route key={route.path} {...route} />
                ))}
            </Switch>
        </Provider>
    </div>
);

export default hot(module)(Root);
