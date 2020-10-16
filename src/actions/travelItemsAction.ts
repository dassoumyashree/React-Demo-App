import { ITravelItem } from '../types/TravelItemType';

export type Action = {
    type: "POPULATE_TRAVEL_ITEMS",
    payload: ITravelItem[]
}

export const populateTravelItems = (items: ITravelItem[]):Action => ({ // returns Action
    type: "POPULATE_TRAVEL_ITEMS",
    payload: items
}); 