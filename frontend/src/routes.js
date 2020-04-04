import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgot from './pages/Forgot';
import Courses from './pages/Courses';

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
            </Switch>

            <GlobalStyle />
        </BrowserRouter>
    )
}