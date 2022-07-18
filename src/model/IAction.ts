import { Action } from 'redux';

export interface IAction<T> extends Action<string> {
    readonly type:any;
    readonly payload?: T;
    readonly error?: boolean;
    readonly meta?: any;
    readonly message?: string;
}