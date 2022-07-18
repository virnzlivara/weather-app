export interface IPayload {
    error: boolean;
    meta: string | null | undefined;
    payload: any;
    type: string;
}