import React, { useState } from "react";

const Greeting = ()=>{
  const [name,setName] = useState('');

  function changeValue(e){
    setName(e.target.value);
  }
  return (
    <div>
      <lebel htmlFor="newValue">Enter your name:</lebel><br/><br/>
      <input 
      type="text"
      id="newValue"
      onChange={changeValue}
      value={name}
      placeholder="write your name"
      />
        {name&&<p>Hello {name}!</p>} 
    </div>
  )

}

export default Greeting 
