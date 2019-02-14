import {createStore,applyMiddleware} from "redux"
import reducers from "../reducers"
import thunk from "redux-thunk"
import logger from 'redux-logger'
//1.创建仓库，并且把reducer放入仓库，这就意味着仓库中有state
const store=createStore(reducers,applyMiddleware(thunk,logger));
export default store;