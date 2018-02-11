import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Data } from './Data';
import { Auth } from './Auth';
import { Filestore } from './Filestore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Bar from '../components/Bar/Bar';
import './app.css';

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
                 <Bar/> 
                </div>
              }/>
              <Auth/>
            <Route exact path="/data" component={Data}/>
            <Route exact path="/auth" component={Auth}/>
            <Route exact path="/filestore" component={Filestore}/>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default HasuraExampleApp;
