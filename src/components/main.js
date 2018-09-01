import React from 'react';

import Landingpage from './landingpage';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';



import {Switch, Route} from 'react-router-dom';

const Main = () => {
    return (
    <Switch>
        <Route exact path='/' component={Landingpage}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/resume' component={Resume}/>
        <Route exact path='/contact' component={Contact}/>
    </Switch>
    );
}

export default Main;