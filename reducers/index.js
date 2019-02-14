import {combineReducers} from 'redux'
import counter from './counter'
import update from './update'
import product from './product'
import carts from './carts'
import detail from './detail'
export default combineReducers({
    update,
    counter,
    product,
    carts,
    detail
})