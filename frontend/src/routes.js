import React from 'react';
import { 
    BrowserRouter, 
    Route, 
    Switch, 
    Redirect, 
    useLocation 
} from 'react-router-dom';

import Home from './pages/site/Home';
import Login from './pages/site/Login';
import Register from './pages/site/Register';
import Forgot from './pages/site/Forgot';
import Courses from './pages/site/Courses';

import Dashboard from './pages/panel/Dashboard';
import PanelLogin from './pages/panel/PanelLogin';
import PanelCourses from './pages/panel/Courses';
import PanelClients from './pages/panel/Clients';
import PanelVideos from './pages/panel/Videos';
import PanelFiles from './pages/panel/Files';
import Error404 from './pages/panel/404';

import GlobalStyle from './GlobalStyles';

export default function Routes() {

    const token = localStorage.getItem('painel-token') || false;

    return (
        <BrowserRouter>
            <Switch>
                
                {/* Website  */}
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/cadastro" component={Register}/>
                <Route path="/esqueci-senha" component={Forgot}/>
                <Route path="/cursos" component={Courses}/>

                {/* Panel  */}
                
                {/* <Route path="/painel" exact component={Dashboard}  
                    render={ (token) => 
                        token ?  
                        <Redirect to="/painel" /> :
                        <Redirect to={{ pathname: "/painel/login" }} /> 
                    }
                                
                /> */}
                <Route path="/painel" exact component={Dashboard}/>
                <Route path="/painel/login" component={PanelLogin}/>
                <Route path="/painel/cursos" component={PanelCourses}/>
                <Route path="/painel/clientes" component={PanelClients}/>
                <Route path="/painel/videos" component={PanelVideos}/>
                <Route path="/painel/arquivos" component={PanelFiles}/>
                <Route path="*" component={Error404} />
                 
            </Switch>

            <GlobalStyle />
        </BrowserRouter>
    )
}