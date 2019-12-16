import { BaseAction } from './common';

export interface ActivityListAction extends BaseAction {
    activities: any[]
}

export const types = {
    LIST: {
        REQUEST: 'ACTIVITY.LIST.REQUEST',
        SUCCESS: 'ACTIVITY.LIST.SUCCESS',
        FAILURE: 'ACTIVITY.LIST.FAILURE',
    },
    CREATE: {
        REQUEST: 'ACTIVITY.CREATE.REQUEST',
        SUCCESS: 'ACTIVITY.CREATE.SUCCESS',
        FAILURE: 'ACTIVITY.CREATE.FAILURE',        
    },
    SIGN: {
        REQUEST: 'ACTIVITY.SIGN.REQUEST',
        SUCCESS: 'ACTIVITY.SIGN.SUCCESS',
        FAILURE: 'ACTIVITY.SIGN.FAILURE',
    },
}

export const list = (idList: string[]): BaseAction => ({
    type: types.LIST.REQUEST
})

