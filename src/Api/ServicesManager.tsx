import { getAsync } from './Api';
import *  as apiUrls from './ApiConstants';
import { ITravelItem } from '../types/TravelItemType';


interface ISuccessCallback {
	( response: ITravelItem[]) : void;
}

interface IFailureCallback {
	( error: Error ) : void;
}

export const getTravelData = async (successCallBack: ISuccessCallback , failureCallBack: IFailureCallback ) => {
    try {
        const response = await getAsync(apiUrls.TRAVEL_API_URL);
        
        successCallBack(response.data);
    } catch (error) {
        failureCallBack(error);
    }
} 