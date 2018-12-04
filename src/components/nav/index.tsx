// Root entry point

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import * as React from "react";
import {Route} from "react-router-dom";

const Button = ({url, label}) => (
    <Route render={({history}) => (
        <button
            type="button"
            onClick={() => {
                history.push(url);
            }}
        >
            {label}
        </button>
    )}/>
);
export default () => (
    <div>
        <Button url="/" label="Home"/>
        <Button url="/admin" label="Admin"/>
    </div>
);
