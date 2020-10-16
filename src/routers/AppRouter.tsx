import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Toolbar from '@material-ui/core/Toolbar';
import TravelItemDetail from '../components/TravelItemDetail';
import Header from '../containers/Header';
import TravelApp from '../containers/TravelApp';
// import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';     

  
const AppRouter = () => {
    
    return (
    <BrowserRouter>
        <div>
            {/* <Header /> */}
            {/* <div className={classes.offset} > */}
            <Switch>
                <Route path="/" component={TravelApp} exact={true} />
                <Route path="/:planname" component={TravelItemDetail} exact={true} />
            </Switch>
            {/* </div> */}
        </div>    
    </BrowserRouter>
)};

export default AppRouter;