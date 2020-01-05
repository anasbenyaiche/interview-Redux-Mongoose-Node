import { createStore,compose, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';
import usersReducer from '../reducer/reducers';

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null


const store = createStore(
  combineReducers({
    users: usersReducer,
    form: formReducer
  })
  ,
  compose(applyMiddleware(thunk), devTools)
);


export default store;