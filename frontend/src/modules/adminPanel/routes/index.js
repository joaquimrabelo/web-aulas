import React, { lazy } from 'react';

import Route from './Route';

import AdminPanelProvider from '../hooks';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const PanelLogin = lazy(() => import('../pages/PanelLogin'));

const PanelCourses = lazy(() => import('../pages/Courses'));
const PanelNewCourse = lazy(() => import('../pages/Courses/NewCourse'));
const PanelEditCourse = lazy(() => import('../pages/Courses/EditCourse'));

const PanelClients = lazy(() => import('../pages/Clients'));

const PanelVideos = lazy(() => import('../pages/Videos'));
const PanelNewVideo = lazy(() => import('../pages/Videos/NewVideo'));
const PanelEditVideo = lazy(() => import('../pages/Videos/EditVideo'));

const PanelFiles = lazy(() => import('../pages/Files'));
const PanelNewFile = lazy(() => import('../pages/Files/NewFile'));
const PanelEditFile = lazy(() => import('../pages/Files/EditFile'));

export default function AdminPanelRoutes() {
  return (
    <AdminPanelProvider>
      <Route path="/painel" exact component={Dashboard} isPrivate />
                
      <Route path="/painel/login" component={PanelLogin}/>

      <Route path="/painel/cursos" exact component={PanelCourses} isPrivate />
      <Route path="/painel/cursos/add" component={PanelNewCourse} isPrivate />
      <Route path="/painel/cursos/:id/edit" component={PanelEditCourse} isPrivate />

      <Route path="/painel/clientes" exact component={PanelClients} isPrivate />
      
      <Route path="/painel/videos" exact component={PanelVideos} isPrivate />
      <Route path="/painel/videos/add" component={PanelNewVideo} isPrivate />
      <Route path="/painel/videos/:id/edit" component={PanelEditVideo} isPrivate /> 

      <Route path="/painel/arquivos" exact component={PanelFiles} isPrivate />
      <Route path="/painel/arquivos/add" component={PanelNewFile} isPrivate />
      <Route path="/painel/arquivos/:id/edit" component={PanelEditFile} isPrivate />
    </AdminPanelProvider>
  );
};