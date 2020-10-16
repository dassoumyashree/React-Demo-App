import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ITravelItem } from '../types/TravelItemType';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { StaticContext } from 'react-router';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AlertButton from './AlertButton';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        listHeader: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: '0px'
        }
    })
);


interface MatchParams {
    planname: string
}

interface LocationState {
    item: ITravelItem
}

interface ITravelItemDetailProps extends RouteComponentProps<MatchParams, StaticContext, LocationState> {   
}

interface RootState {
    travelItems: ITravelItem[]
}

const TravelItemDetail = ({history, location: {state: {item}}, match}: ITravelItemDetailProps) => {
    const classes = useStyles();
    const [planName, setPlanName] = useState<string>(match.params.planname);
    const [travelItem, setTravelItem] = useState<ITravelItem>(item);

    return (
        <div>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography component="div" style={{ backgroundColor: 'Azure', height: '100vh', padding: '8px 20px', marginTop: '20px' }} >
                <div className={classes.listHeader}>
                    <h3>{planName}</h3>
                    <AlertButton text="Alert"/>
                </div>
                <Divider />
                <p>Price: {travelItem.price}</p>
                <p>{travelItem.plandetails}</p>
                <p>Rating: {travelItem.rating}</p>
                <Button variant="outlined" color="primary" onClick={() => history.goBack()}>Back</Button>
                </Typography>
            </Container>
        </div> 
    )
}


export {TravelItemDetail as default}





