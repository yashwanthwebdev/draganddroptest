 
import Home from './Components/Home/Home'
import style from "./App.module.css"
import { DragDropContext , Draggable, Droppable } from 'react-beautiful-dnd'
import {useState, useEffect } from 'react'
import { Document, Page, Image } from 'react-pdf/dist/esm/entry.webpack';
// import { Document, Page  } from 'react-pdf'
import pdfFile from './YashwanthSrinivas.pdf';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

function App() {

  const [xMousePos, setXMousePos] =useState (null);
  const [yMousePos, setYMousePos] =useState (null );
  const [width,setWidth] = useState(null);
  const [height,setHeight] = useState(null);
  const [itemsArray ,setItemsArray ] = useState([])
  const [pageNumber, setPageNumber] =  useState(1);
    const [totalPages, setTotalPages] = useState(null);

    function  onPdfLoad ({numPages}) {
        console.log('pdf loaded sucessfully. total number of pages : ', numPages);
        setTotalPages(numPages);
    }

    function onItemClick() {
      console.log("pdf was clicked on")
    }


useEffect ( ()=> {
  console.log("updated itemsArray is ", itemsArray);
},[itemsArray])

  window.addEventListener('mousemove' , (event)=> {
    // console.log("new mouse position is ", event.clientX, event.clientY);
    setXMousePos(event.clientX);
    setYMousePos(event.clientY);
  } ) ;
  function onDragEnd (result) {
    
    console.clear();
    console.log("inside ondragend");
    console.log(result);
    console.log("on pdf position is ", xMousePos, yMousePos)

    const customWidth ="10ch"; const customHeight = "2ch"
    //check what type of item is being added and then add it to the itemsArray
    // imprintInput( {xMousePos,yMousePos}, {customWidth,customHeight})
    setItemsArray( (previousState) =>  [...previousState,{xMousePos,yMousePos,customWidth,customHeight}])
  }

  function imprintInput({xPos,yPos}, {customWidth,customHeight}) {
console.log("inside imprint");

  }

  function takeScreenshot (){
    const element = document.getElementById("App_main");
    html2canvas(element , {loggin:true, letterRendering:1, useCORS:true})
    .then ((canvas)=> {
      // document.body.appendChild(canvas);
      //  canvas.toDataURL('image/jpeg')
     const imgWidth=600;
     const imgHeight = canvas.height* imgWidth/canvas.width;
    //  const imgWidth=600;
    //  const imgHeight = canvas.height* imgWidth/canvas.width;
    //  const imgData = canvas.toDataURL('img/png',1.0);
     const imgData = canvas.toDataURL('image/jpeg',1.0);
     const pdf = new jsPDF('p','mm', 'a4');
    //  const pdf = new jsPDF('','pt', 'a4');
    //  const pdf = new jsPDF();
     pdf.addImage(imgData,'JPEG',0,0,imgWidth,imgHeight)
     pdf.save("goatrank.pdf");
    })
     }

  

  return (
        <DragDropContext  onDragEnd={ (result)=> { onDragEnd(result)} } 
     
      >
    <div className={style.App}    >
    {/* <span className={style.title}>testing of docusign </span> */}
    

<div className="mainContainer">
     <div className={style.homeContainer}>
       <Home/>
       </div>

       <button  onClick={takeScreenshot}>take screenshot and download pdf</button>

<div className="neededContainer" id="App_main">
       

<Document file={pdfFile} onLoadSuccess={onPdfLoad}
className={style.documentContainer}
       > 
<Droppable droppableId='pdf'>
        { (provided)=> (
      <div ref={provided.innerRef} {...provided.droppableProps}
      className={style.pdfContainer}
      id="divPdf">
          <Page  rendermode="canvas"  pageNumber={pageNumber}
          // height={900}
          width={700}
           renderTextLayer={false}
          // canvasBackground="blue"
           renderAnnotationLayer={false}
           >
        
          </Page>
          {provided.placeholder}
          </div>
          )}

        </Droppable>
         
        </Document>

        { itemsArray.length>0 ? 
     
     itemsArray.map((eachItem, index) => {
       return  <input key={index} placeholder="text" style={{width:`${eachItem.customWidth}`,
       height:`${eachItem.customHeight}`,
       backgroundColor:"black",
       color:"white",
       position:"absolute",
       top:`${eachItem.yMousePos}px`,
       left:`${eachItem.xMousePos}px`,
       padding:"0px",
       margin:"0px"
     }}
     
     //onClick to make sure that the item is placed at the correct spot
    
     />
     })
    
   : <span>no items have been dnd'd yet</span> }
        </div>
        </div>

    </div>
  
 
    
    </DragDropContext>
  );
}

export default App;
