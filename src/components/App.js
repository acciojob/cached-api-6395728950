
import React, { useEffect, useMemo, useState } from "react";
import './../styles/App.css';
 
const App = () => {
  const[input,setInput]= useState([]);
  const[loading,setLoading] = useState(true);
  const[userId,setId] = useState(1);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>{
      setInput(data);
      setLoading(false);
    })
  },[])
  console.log("what is in input",input);
   const filterData = useMemo(()=>{
     if(userId<1  || userId>10){
         return input;
     }
        return input.filter((item)=>item.userId===parseInt(userId));
   },[userId,input]);
  return (
    <div>
      <input type="text" value={userId} onChange={(e)=>setId(e.target.value)}></input>
        {
          loading ? (<p>Loading...</p>) :(
             <ul>
              {
                filterData.map((item)=>(
                   <li key={item.id}>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                   </li>
                ))
              }
             </ul>
        ) 
        }
    </div>
  )
}

export default App
