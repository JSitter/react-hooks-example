import React, { useState, useEffect } from 'react';

function App(){
  const [count, setCount] = useState(0);

  useEffect(function(){
    // This will log 'Foo!' to the console
    // every time the component is re-rendered
    console.log("Foo!")
  })

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={()=> setCount(count + 1)}>Change Count</button>
    </div>
  )
}

export default App;
