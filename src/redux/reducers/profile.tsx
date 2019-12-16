import { types } from '../actions/profile';
import { BaseAction } from '../actions/common';
import { Profile, ProfileAction } from '../actions/profile';

export interface ProfileState {
    loading: boolean,
    profile: Profile
}

const initialState: ProfileState = {
    loading: false,
    profile: {
        activities: [],
        public: false,
        store: null
    }
}

export function profileReducer(state=initialState, action: BaseAction) {
    switch(action.type) {
        case types.READ.REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.READ.SUCCESS:
            return {
                ...state,
                loading: false,
                profile: (action as ProfileAction).profile
            }
        case types.READ.FAILURE:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}