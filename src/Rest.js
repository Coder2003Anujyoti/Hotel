import React,{useState} from 'react';
import MenuApi from './MenuApi.js';
import './Rest.css';

const array=[...new Set(MenuApi.map((i)=>{return i.category;})),"All"];

const Rest=()=>{
  const [btn,setBtn]=useState(array);
const [items,setItems]=useState(MenuApi);
const [toggle,setToggle]=useState("");
const handle=(id)=>{
  if(id!="All"){
  const up=MenuApi.filter((item)=>{
    if(item.category===id)
    return {...item};
  });
  setItems(up);
  setToggle(id);
  }
  if(id==="All"){
    setItems(MenuApi);
    setToggle(id);
  
  }
}

  return (
    <>
    <meta name="viewport" content="width=device-width, user-scalable=no" />
    <div id="rest">
       <div id="container">
      <div id="heading"> <h1 id="op">Welcome to Menu Bar</h1></div>
    <div id="button-container">
      {btn.map((item)=>{
  return <button style={{backgroundColor:`${(toggle==item)?"#00FF00":"black"}`,
    color:`${(toggle==item)?"black":"white"}`
  }}
  onClick={()=>handle(item)} id="bn">{item}</button>
      })}
      </div>
      </div>
      <div id="image-containers">
      {items.map((item)=>{
        return(
        <>
          <div id="image-container">
   <img src={item.image} id="image" alt="" />
            <h3 id="name">{item.name}</h3>
          </div>
        </>
        )
      })}
      </div>
  </div>
    </>
    )
}
export default Rest;