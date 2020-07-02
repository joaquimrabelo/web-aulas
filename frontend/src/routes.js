import React, { Suspense, lazy } from 'react';
import { 
    BrowserRouter, 
    Route, 
    Switch
} from 'react-router-dom';

import Loading from '../src/components/loading'
import Error404 from './modules/adminPanel/pages/404';

import GlobalStyle from './GlobalStyles';

export default function Routes() {

    const  Home = lazy(() => import('./modules/clientPanel/pages/Home'));
    const  Login = lazy(() => import('./modules/clientPanel/pages/Login'));
    const  Register = lazy(() => import('./modules/clientPanel/pages/Register'));
    const  Forgot = lazy(() => import('./modules/clientPanel/pages/Forgot'));
    const  Courses = lazy(() => import('./modules/clientPanel/pages/Courses'));

    const Dashboard = lazy(() => import('./modules/adminPanel/pages/Dashboard'))
    const PanelLogin = lazy(() => import('./modules/adminPanel/pages/PanelLogin'))

    const PanelCourses = lazy(() => import('./modules/adminPanel/pages/Courses'))
    const PanelNewCourse = lazy(() => import('./modules/adminPanel/pages/Courses/NewCourse'))
    const PanelEditCourse = lazy(() => import('./modules/adminPanel/pages/Courses/EditCourse'))

    const PanelClients = lazy(() => import('./modules/adminPanel/pages/Clients'))

    const PanelVideos = lazy(() => import('./modules/adminPanel/pages/Videos'))
    const PanelNewVideo = lazy(() => import('./modules/adminPanel/pages/Videos/NewVideo'))
    const PanelEditVideo = lazy(() => import('./modules/adminPanel/pages/Videos/EditVideo'))

    const PanelFiles = lazy(() => import('./modules/adminPanel/pages/Files'))
    const PanelNewFile = lazy(() => import('./modules/adminPanel/pages/Files/NewFile'))
    const PanelEditFile = lazy(() => import('./modules/adminPanel/pages/Files/EditFile'))

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