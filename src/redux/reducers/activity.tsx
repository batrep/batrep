import { types } from '../actions/login';
import { BaseAction } from '../actions/common';

const initialState = {
    loading: false,
    activities: []
}

export default function activityReducer(state=initialState, action: BaseAction) {
    switch(action.type) {
        default:
            return state;
    }
}