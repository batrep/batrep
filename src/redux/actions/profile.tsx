import { BaseAction, BaseError } from './common';

export interface Profile {
    activities: string[],
    public: boolean,
    store: string | null
}

export interface ProfileReadAction extends BaseAction {
    uid: string
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
    SYNC: {
        REQUEST: 'PROFILE.SYNC.REQUEST'
    }
}

export const read = (uid: string): ProfileReadAction => ({
    type: types.READ.REQUEST,
    uid: uid
})

export const sync = (uid: string): ProfileReadAction => ({
    type: types.SYNC.REQUEST,
    uid: uid
})

export const readSuccess = (profile: Profile): ProfileAction => ({
    type: types.READ.SUCCESS,
    profile: profile
})

export const readFailure = (error: any): BaseError => ({
    type: types.READ.FAILURE,
    error: error,
})
  

