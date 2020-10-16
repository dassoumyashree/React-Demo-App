import { ITravelItem } from '../types/TravelItemType';
import { Action } from './../actions/travelItemsAction';

export interface TravelItemsState {
    travelItems: ITravelItem[]
}

// const initialState: TravelItemsState = {
//     travelItems: []
// }

const initialState: ITravelItem[] = []

export default (state: ITravelItem[] = initialState, action: Action) => {
    switch(action.type) {
        case "POPULATE_TRAVEL_ITEMS": {
            // const d = { ...state, travelItems: [...state.travelItems , action.payload]};
            return action.payload;
        }
        default:
            return state; 
    }
}