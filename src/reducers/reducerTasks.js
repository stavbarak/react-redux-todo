import _ from 'lodash';
import { FETCH_TASKS, FETCH_TASK, DELETE_TASK } from '../actions';

export default function (state = {}, action) {
    switch (action.type){
        case FETCH_TASKS:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_TASK:
            return { ...state, [action.payload.data.id]: action.payload.data }
        case DELETE_TASK:
            return _.omit(state, action.payload);
        default: 
            return state;
    }
}


