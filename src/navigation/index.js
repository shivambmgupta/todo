import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screens, StorageKey, ActionTypes } from '../constants';
import Storage from '../utils/storage';
import { useDispatcherContext } from '../context/reducer';

// importing screens
import Home from '../screens/Home';
import CrudTask from '../screens/CrudTask';

const Stack = createStackNavigator();

export default (props) => {
    const dispatch = useDispatcherContext();
    Storage.getItem(StorageKey.KEY).then(tasks => {
        let state = tasks ? tasks : []
        dispatch({ type: ActionTypes.INIT, payload: state })
    }).catch(err => {
        dispatch({ type: ActionTypes.INIT, payload: [] })
    })    
    return (
        <Stack.Navigator mode="card" headerMode="none">
            <Stack.Screen
                name={Screens.HOME_SCREEN}
                component={Home}
            />
            <Stack.Screen 
                name={Screens.CRUD_SCREEN}
                component={CrudTask}
            />
        </Stack.Navigator>
    );
}