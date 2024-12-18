import React from 'react'
import { useSelector } from 'react-redux'
import { decrement, increment} from './Redux/CounterSlice'  //icrement action import
import { useDispatch } from 'react-redux'      //used to give dispatch function
import { reset } from './Redux/CounterSlice'
import { useState } from 'react'
import { incrementByAmount } from './Redux/CounterSlice'


function Counter() {
  const{count}=useSelector(state=>state.CounterReducer)  //destructue count
  const dispatch=useDispatch()
  const[amount,setAmount]=useState()
  console.log(amount);

  const handleIncrementByamount=()=>{
    if(amount)
    {
      dispatch(incrementByAmount(parseInt(amount)))//converts string to integer
    }
    else{
      alert(" please enter a value")
    }

  }
  
  
  return (
    <>
   
     <div style={{backgroundColor:'black',minHeight:'100vh'}} className='d-flex align-items-center flex-column border border-light w-100 pt-5'>
    <h1 className='text-light mb-3'>Counter App</h1>
    <div className='border border-white border-3 w-50 text-center ' style={{height:'400px'}}>

      <h1 className='text-white mt-5'>{count}</h1>
      <div className='d-flex align-items justify-content-around mt-5 '>
          <button onClick={()=>dispatch(increment())} className=' btn bg-warning fs-5'>Increment</button>
          <button onClick={()=>dispatch(reset())} className=' btn bg-danger fs-5'>Reset</button>
          <button onClick={()=>dispatch(decrement())} className=' btn bg-success fs-5'>Decrement</button>

      </div>
      <div className='d-flex align-items-center justify-content-center mt-5'>
        <input onChange={(e)=>setAmount(e.target.value)} style={{height:'50px'}} type='text' className='w-50 fs-4 ps-2'placeholder='Enter a value'></input>
        <button onClick={handleIncrementByamount} className=' btn bg-primary ms-5 p-2 text-light'> Increment by Amount</button>
      </div>
    </div>
    


     

   </div>
    
    
    </>
  )
}

export default Counter