import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const  Home = lazy(() => import('../pages/Home'));
const  Login = lazy(() => import('../pages/Login'));
const  Register = lazy(() => import('../pages/Register'));
const  Forgot = lazy(() => import('../pages/Forgot'));
const  Courses = lazy(() => import('../pages/Courses'));

export default function ClientPanelRoutes() {
  return (
    <>
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/cadastro" component={Register}/>
      <Route path="/esqueci-senha" component={Forgot}/>
      <Route path="/cursos" component={Courses}/>
    </>
  );
};