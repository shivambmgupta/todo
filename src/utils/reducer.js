import { ActionTypes } from '../constants';
import Storage from './storage';

export default reducer = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.CREATE:
            let newState = [...state, action.payload];
            Storage.updateStore(newState);
            return newState
        case ActionTypes.EDIT: {
            let temp = state.filter(task => task.id !== action.payload.id)
            temp.push(action.payload);
            Storage.updateStore(temp);
            return temp;
        }
        case ActionTypes.DELETE: {
            let temp = state.filter(task => task.id !== action.payload?.id)
            Storage.updateStore(temp);
            return temp;
        }
        case ActionTypes.INIT: {
            return action.payload
        }
        case ActionTypes.SORT: {
            let temp = state.sort((left, right) => {
                if (left?.dueDate && right?.dueDate) {
                    var leftDate = new Date(left.dueDate.substring(6), left.dueDate.substring(3, 5), left.dueDate.substring(0, 2))
                    var rightDate = new Date(right.dueDate.substring(6), right.dueDate.substring(3, 5), right.dueDate.substring(0, 2))
                    return leftDate - rightDate;
                }
                else return -1;
            })
            return [...temp];
        }
        default:
            return state;
    }
}