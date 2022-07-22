import {createStore, combineReducers} from 'redux';

import {addCurrencyArray, deleteString} from './actions'

const rootReduce = combineReducers({
    currencys:addCurrencyArray,
    deteleStr:deleteString,
})
const store = createStore(rootReduce);
export default store
