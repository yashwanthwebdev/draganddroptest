import React from 'react'
// import Pdf from '../Pdf/Pdf'
import Items from '../Items/Items'
import style from './Home.module.css'
import {  Droppable    } from 'react-beautiful-dnd'



function Home() {
  const index =1 ;

 


  return (
    <div className={style.mainContainer}>
             
        <Droppable droppableId='items'>
        { (provided)=> (
            <div ref={provided.innerRef} {...provided.droppableProps}>
 

<Items className={style.itemsContainer} index={index}/>

 {provided.placeholder}
</div>
          )}

        </Droppable>

        {/* <Droppable droppableId='pdf'>
        { (provided)=> (
      
            <div ref={provided.innerRef} {...provided.droppableProps}
            id="App_main">

<Pdf className={style.documentContainer} />
 {provided.placeholder}
</div>
          )}

        </Droppable>  */}
        </div>
      
        

        
  
    
  )
}

export default Home