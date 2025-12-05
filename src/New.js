import { useState } from "react"

function New(){
    const [count,setCount] =useState(0)
     return(
       <>
       <center>
       <div className="set">
       <h2>Count : {count}</h2>
       <button onClick={()=> setCount(count + 1)}>Increment</button>
       <button onClick={()=> setCount(count - 1)}>Decrement</button>
       <button onClick={()=> setCount(count * 0)}>Reset</button>
       </div>
       </center>
       </>
     )
}
export default New ;
