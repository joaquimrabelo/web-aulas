import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/site/Home';
import Login from './pages/site/Login';
import Register from './pages/site/Register';
import Forgot from './pages/site/Forgot';
import Courses from './pages/site/Courses';

import Panel from './pages/panel/Panel';

import GlobalStyle from './GlobalStyles';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/cadastro" component={Register}/>
                <Route path="/esqueci-senha" component={Forgot}/>
                <Route path="/cursos" component={Courses}/>
                
                <Route path="/painel" component={Panel}/>
            </Switch>

            <GlobalStyle />
        </BrowserRouter>
    )
}