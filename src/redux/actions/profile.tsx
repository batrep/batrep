import { BaseAction, BaseError } from './common';

export interface Profile {
    activities: string[],
    public: boolean,
    store: string | null
}

export interface ProfileAction extends BaseAction {
    profile: Profile
}

export const types = {
    READ: {
        REQUEST: 'PROFILE.GET.REQUEST',
        SUCCESS: 'PROFILE.GET.SUCCESS',
        FAILURE: 'PROFILE.GET.FAILURE',
    },
    CREATE: {
        REQUEST: 'PROFILE.CREATE.REQUEST',
        SUCCESS: 'PROFILE.CREATE.SUCCESS',
        FAILURE: 'PROFILE.CREATE.FAILURE',        
    },
    UPDATE: {
        REQUEST: 'PROFILE.UPDATE.REQUEST',
        SUCCESS: 'PROFILE.UPDATE.SUCCESS',
        FAILURE: 'PROFILE.UPDATE.FAILURE',
    },
}

export const read = (uid: string): BaseAction => ({
    type: types.READ.REQUEST
})

export const readSuccess = (profile: Profile): ProfileAction => ({
    type: types.READ.SUCCESS,
    profile: profile
})

export const readFailure = (error: any): BaseError => ({
    type: types.READ.FAILURE,
    error: error,
})
  

