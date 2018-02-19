import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Bar from '../components/Bar/Bar';
import UserSignup from '../components/Login/UserSignIn';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginPage from '../components/Login/login';


const AppRouter = () => (
    <BrowserRouter>
        <MuiThemeProvider>
           <Bar/> 
            <Switch>
                <Route path="/" component={LoginPage} />
                <Route path="/UserSignup" component={UserSignup} />
            </Switch>
        </MuiThemeProvider>
    </BrowserRouter>
);

export default AppRouter;