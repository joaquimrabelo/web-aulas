import React, { Suspense, lazy } from 'react';
import { 
    BrowserRouter, 
    Route, 
    Switch
} from 'react-router-dom';

import Loading from '../src/pages/loading'
import Error404 from './pages/panel/404';

import GlobalStyle from './GlobalStyles';

export default function Routes() {

    const  Home = lazy(() => import('./pages/site/Home'));
    const  Login = lazy(() => import('./pages/site/Login'));
    const  Register = lazy(() => import('./pages/site/Register'));
    const  Forgot = lazy(() => import('./pages/site/Forgot'));
    const  Courses = lazy(() => import('./pages/site/Courses'));

    const Dashboard = lazy(() => import('./pages/panel/Dashboard'))
    const PanelLogin = lazy(() => import('./pages/panel/PanelLogin'))

    const PanelCourses = lazy(() => import('./pages/panel/Courses'))
    const PanelNewCourse = lazy(() => import('./pages/panel/Courses/NewCourse'))
    const PanelEditCourse = lazy(() => import('./pages/panel/Courses/EditCourse'))

    const PanelClients = lazy(() => import('./pages/panel/Clients'))

    const PanelVideos = lazy(() => import('./pages/panel/Videos'))
    const PanelNewVideo = lazy(() => import('./pages/panel/Videos/NewVideo'))
    const PanelEditVideo = lazy(() => import('./pages/panel/Videos/EditVideo'))

    const PanelFiles = lazy(() => import('./pages/panel/Files'))
    const PanelNewFile = lazy(() => import('./pages/panel/Files/NewFile'))
    const PanelEditFile = lazy(() => import('./pages/panel/Files/EditFile'))

    return (
        <BrowserRouter>
            <Switch>
                <Suspense fallback={<Loading />}>
                    
                    {/* Website  */}
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/cadastro" component={Register}/>
                    <Route path="/esqueci-senha" component={Forgot}/>
                    <Route path="/cursos" component={Courses}/>

                {/* Panel  */}
                              
                    <Route path="/painel" exact component={Dashboard}/>
                
                    <Route path="/painel/login" component={PanelLogin}/>

                    <Route path="/painel/cursos" exact component={PanelCourses} activeClassName="active" />
                    <Route path="/painel/cursos/add" component={PanelNewCourse}/>
                    <Route path="/painel/cursos/:id/edit" component={PanelEditCourse}/>

                    <Route path="/painel/clientes" exact component={PanelClients}/>
                    
                    <Route path="/painel/videos" exact component={PanelVideos}/>
                    <Route path="/painel/videos/add" component={PanelNewVideo} />
                    <Route path="/painel/videos/:id/edit" component={PanelEditVideo} /> 

                    <Route path="/painel/arquivos" exact component={PanelFiles}/>
                    <Route path="/painel/arquivos/add" component={PanelNewFile} />
                    <Route path="/painel/arquivos/:id/edit" component={PanelEditFile} /> 

                </Suspense>
                 
                <Route path="*" component={Error404} />
            </Switch>

            <GlobalStyle />
        </BrowserRouter>
    )
}