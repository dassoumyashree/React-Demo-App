import { createStore, combineReducers, compose } from 'redux';
import travelItemsReducer from '../reducers/travelItemsReducer';

// export const store = createStore(travelItemsReducer);

// const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

export const rootReducer = () => {
    const store = createStore(
        combineReducers({
            travelItems: travelItemsReducer
        }),
        // composeEnhancers()
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};

export type RootState = ReturnType<typeof rootReducer>