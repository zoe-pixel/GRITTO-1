import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../style/App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home  from '../components/index';
import Component1 from '../components/Component1';
import Component2 from '../components/Component2';
import Component3 from '../components/Component3';
import PageNotFound from './PageNotFound';


function App() {
    return (    
        <Router>  
            <CssBaseline />
            <Switch>               
                <Route path="/" exact component={Home} />            
                <Route path="/component1" component={Component1} />                                   
                <Route path="/component2" component={Component2} />                                   
                <Route path="/component3" component={Component3} />           
                <Route path="*" component={PageNotFound} />
            </Switch>  
        </Router>                                             
    );
}

export default App;