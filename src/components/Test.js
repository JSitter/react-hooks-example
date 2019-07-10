import React, {useEffect } from 'react';

function Test(){
  const testFunction = ()=>{
    console.log("Updated")
  }
  let value = 0
  const changeVal = ()=>{
    value = value + 1
    console.log(value)
  }
  useEffect(()=>{
    testFunction()
  }, [value])
  return (

    <div onClick={()=>changeVal()}>test {value}</div>
   
  )
}

export default Test;