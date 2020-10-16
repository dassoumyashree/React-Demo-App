import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getTravelData } from '../Api/ServicesManager';
import { populateTravelItems } from '../actions/travelItemsAction';
import { ITravelItem } from '../types/TravelItemType';
import { ITravelItems } from '../types/ITraveItems';

interface RootState {
    travelItems: ITravelItem[]
  }
  
const selectTravelItems = (state: RootState) => state.travelItems

const useServiceCall = () => {
    const dispatch = useDispatch()
    const travelItems = useSelector(selectTravelItems);

    const successCallBack = (response: ITravelItem[]) => {  
      // dispatch({type: "POPULATE_TRAVEL_ITEMS", payload: result})
      console.log('res', response)
      dispatch(populateTravelItems(response))
    }
  
    const failureCallBack = (error: object) => { 
      console.log(error)
    }
  
    // useEffect(() => {
    //   getTravelData(successCallBack, failureCallBack);
    // }, [])
    return {
        travelItems, 
        successCallBack, 
        failureCallBack, 
        getTravelData
    }
  }

  export { useServiceCall as default }