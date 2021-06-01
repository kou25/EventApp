import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Events from '../Container/Events';
import Header from '../Components/Header';
import ViewEvent from '../Container/ViewEvent';

export default function RouteContainer() {
    const [switchNav, setSwitchNav]=React.useState(false)
    return (
        <main className="main-content-wrapper">
        <Header switchNav={switchNav} setSwitchNav={setSwitchNav}/>
        <div className="sections">
        <Switch>
            <Route exact path="/" ><Events/></Route>
            <Route  path="/event/:id"><ViewEvent setSwitchNav={setSwitchNav}/></Route>
        </Switch>
        </div>
        </main>

    )
}
