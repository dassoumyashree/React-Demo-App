import React, { useEffect } from 'react';
import TravelList from '../components/TravelList';
import { ITravelItem } from '../types/TravelItemType';
import useServiceCall from '../hooks/useServiceCall';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
// import { TravelItemsState } from '../reducers/travelItemsReducer';


const useStyles = makeStyles((theme: Theme) => ({
  loadingStyle: {
    marginLeft: '20px'
  }
}));

const TravelApp: React.FC = (props) => {
    const classes = useStyles();
    // const travelItems = useSelector<ITravelItem[], ITravelItem[]>((state) => state) 
    //parses our state obj and get only the required field from it

    const {travelItems, successCallBack, failureCallBack, getTravelData} = useServiceCall();

    useEffect(() => {
      getTravelData(successCallBack, failureCallBack);
      console.log('from TravelApp', travelItems)
    }, [getTravelData])

  return (
    
    <div>
        {travelItems.length !== 0 ?  
          <TravelList travelData={travelItems} />
         : <p className={`${classes.loadingStyle}`} >Loading...</p> }    
    </div>
    
  );
} 

export default TravelApp;




