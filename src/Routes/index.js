import React from 'react'
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Events from '../Container/Events';

export default function RouteContainer() {
    return (
        <main className="main-content-wrapper">
        <Switch>
            <Route exact path="/" component={Events} />
        </Switch>
        </main>

    )
}
