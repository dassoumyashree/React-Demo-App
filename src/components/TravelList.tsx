import React from 'react';
import TravelItem from './TravelItem';
import { ITravelItem, ITravelItems } from '../types';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import AlertButton from './AlertButton';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            width: '100%',
            maxWidth: 700,
            // backgroundColor: theme.palette.background.paper
            backgroundColor: 'Azure',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: 'auto',
            marginTop: '20px',
            padding: '0 20px'
        },
        listHeader: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: '5px 20px'
        }
    })
);


interface AppProps {
    travelData: ITravelItem[];
}

// const TravelList = (props: {travelData: ITravelItem[]}) => {
const TravelList = ({travelData}: AppProps) => {
    // const { travelData } = props;
    const classes = useStyles();
    console.log('travelData', travelData)
    return (
        <>
            <div className={classes.root}>
                <div className={classes.listHeader}>
                    <h3>Places to visit</h3>
                    <AlertButton text="Go!"/>
                </div>
                <Divider />
                {travelData && travelData.map((item: ITravelItem) => (
                    <TravelItem key={item.plancode} item={item} />
                ))   
                }
            </div>
        </>
    )
}


export { TravelList as default }