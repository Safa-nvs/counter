import { configureStore } from "@reduxjs/toolkit";//it returns store
import CounterSlice from './CounterSlice'

const CounterStore=configureStore({

    reducer:{
         
        CounterReducer:CounterSlice     //CounterReducer:-its a name

    }
})
export default CounterStore