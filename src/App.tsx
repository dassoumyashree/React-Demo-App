import React, { useState, useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Provider } from "react-redux";
// import { store } from './store/configureStore';
import Header from './containers/Header';
import { rootReducer } from './store/configureStore';
import AppRouter from './routers/AppRouter';

export const store = rootReducer();

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            minHeight: '100vh',
            backgroundColor: '#b3f0ff',
            paddingBottom: '20px',
        }
    })
);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Provider store={store} >
        <AppRouter />
      </Provider>
  
    </div>
  );
} 

export default App;





