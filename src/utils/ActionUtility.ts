 
import { IAction } from '../model/IAction'

export class ActionUtility {
    static createAction<T = undefined>(type: string, payload?: T, error = false, meta:any=null):IAction<T> {
        return { type, payload, error, meta}
    }

    static requestCompleted<T = undefined>(type: string, payload?: T, error = false, meta: any = null): IAction<T> {
        return {type: `${type}_FINISHED`, payload, error, meta}
    }
}