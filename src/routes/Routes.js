import React from 'react';
import {BrowserRouter,Switch, Route } from 'react-router-dom';
import MenuP from '../Views/MenuP';
import ChangeClave from '../Views/ChangeClave';
import DataPersonal from '../Views/DataPersonal';
import history from '../Views/Shopping_history';
import Login from '../Views/Login';

function Routes(){
    return(
        <BrowserRouter>
         <Switch>
            <Route exact path="/" component={Login}/>  {/* Principal page */}
            <Route exact path="/Login" component={Login}/>  {/* Principal page */}
            <Route exact path="/MenuP" component={MenuP}/>  {/* Principal page */}
            <Route exact path="/ChangeClave" component={ChangeClave}/>  {/* Principal page */}
            <Route exact path="/DataPersonal" component={DataPersonal}/>      
            <Route exact path="/Shopping_history" component={history}/>    {/* //Route to the history */}
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;