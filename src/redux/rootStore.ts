import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore, Middleware, Store } from "redux"; 
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { IStore } from '../model/IStore';

// export default (): Store<IStore>=> {
export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware({
        onError: (err:any) => {
            store.dispatch({
                type: 'ERROR',
                payload: err
            })
        }
    });
    const middleware : Middleware[] = [
        sagaMiddleware 
    ].filter(Boolean); 
    const store : Store<IStore> = createStore(
        rootReducer,
        applyMiddleware(...middleware)
      ); 
    sagaMiddleware.run(rootSaga)
    return store;
}