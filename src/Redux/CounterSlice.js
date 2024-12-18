import { createSlice } from "@reduxjs/toolkit";//it creates action and reducer together

const CounterSlice=createSlice({                 //name:-name of slice   //initalSate
   
    name:'counter',
    initialState:{
        count:0,
    },
    reducers:{  
                                              //count ne update cheyyan ulla actions
     increment:(state)=>{                      //state arg:-it access initialState
 
        state.count++

     },
     decrement:(state)=>{
        state.count--

     },
     reset:(state)=>{
        return{...state,count:0}    // using spread operator set the count value to'0'
     },
     incrementByAmount:(state,action)=>{

        state.count+=action.payload

     }
    }
})



export const {increment,decrement,reset,incrementByAmount}=CounterSlice.actions
export default CounterSlice.reducer