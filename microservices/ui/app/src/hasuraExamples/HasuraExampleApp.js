import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './app.css';
import AppRouter from '../components/AppRouters';
import Signup from '../components/Login/UserSignIn';
import Login from '../components/Login/login';
class HasuraExampleApp extends React.Component {

  render() {
    const styleObj = {
     backgroundColor:'red'
    };
    return (
      <MuiThemeProvider>
        <Router>
          <div className="home"  style={styleObj}>
            <Route exact path="/" render={() =>
                <div>
                  <AppRouter/>
                 </div>
              }/>
             
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default HasuraExampleApp;
