import React from 'react'
import style from './Items.module.css'
import {  Draggable } from 'react-beautiful-dnd'
// import inputBox from '../../../public/assets/inputbox.jpg';
import inputBox from '../../assets/inputbox.jpg';
import ReactDOM from 'react-dom'

function Items() {
  const index =1 ; 
  return (
    <div className={style.mainContainer}>

<Draggable draggableId="1" index={index} >
          { (provided)=> (

            <div {...provided.draggableProps} 
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={style.inputContainer1}
              >

 
             
        <div>     
 <img src={inputBox} className={style.imageinput1}  alt="input"

onClick= { (event) => {
  console.log("item with key ", index," has been clicked ");
  var rect = ReactDOM.findDOMNode(this)
  .getBoundingClientRect();
  console.log(rect);
}}
/>

{/* <span>&#60;----draggable input box</span> */}

</div>

      </div>   
          )}
        
        </Draggable>
        </div>    
  )
}

export default Items