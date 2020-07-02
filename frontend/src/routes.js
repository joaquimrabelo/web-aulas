import React, { Suspense } from 'react';
import { 
    BrowserRouter, 
    Route, 
    Switch
} from 'react-router-dom';

import Loading from '../src/components/loading'
import Error404 from './modules/adminPanel/pages/404';

import AdminPanelRoutes from './modules/adminPanel/routes';
import ClientPanelRoutes from './modules/clientPanel/routes';

import GlobalStyle from './GlobalStyles';

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Suspense fallback={<Loading />}>
                    
                    <ClientPanelRoutes />
                             
                    <AdminPanelRoutes />

                </Suspense>
                 
                <Route path="*" component={Error404} />
            </Switch>
            <GlobalStyle />
        </BrowserRouter>
    );
};