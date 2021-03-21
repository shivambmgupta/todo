import React, { useState, useContext } from 'react';
import { useReducer } from 'react';
import reducer from '../utils/reducer';

const StoreContext = React.createContext();
const DispatcherContext = React.createContext();

export const useStore = () => {
    return useContext(StoreContext);
}
export const useDispatcherContext = () => {
    return useContext(DispatcherContext);
}

export default (props) => {
    const [store, dispatch] = useReducer(reducer, []);
    return (
        <StoreContext.Provider value={store}>
            <DispatcherContext.Provider value={dispatch}>
                {props.children}
            </DispatcherContext.Provider>
        </StoreContext.Provider>
    );
}