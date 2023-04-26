import React, {useState, useEffect} from 'react'
// import {Document  , Page}   from 'react-pdf'
import { Document, Page, Image } from 'react-pdf/dist/esm/entry.webpack';
// import { Document, Page  } from 'react-pdf'
import pdfFile from './YashwanthSrinivas.pdf';
import {  Droppable    } from 'react-beautiful-dnd'
import football from '../../assets/football.png'
import style from './Pdf.module.css'



function Pdf() {
    const [pageNumber, setPageNumber] =  useState(1);
    const [totalPages, setTotalPages] = useState(null);

    function  onPdfLoad ({numPages}) {
        console.log('pdf loaded sucessfully. total number of pages : ', numPages);
        setTotalPages(numPages);
    }


    function onItemClick() {
      console.log("pdf was clicked on")
    }

    
 
  return (
      <div>
         
        {/* <button onClick={takeScreenshot}>take screenshot</button> */}


<Document file={pdfFile} onLoadSuccess={onPdfLoad}
className={style.documentContainer}
    // onItemClick={onItemClick()} 
      > 
<Droppable droppableId='pdf'>
        { (provided)=> (
      <div ref={provided.innerRef} {...provided.droppableProps}
      className={style.pdfContainer}
      id="divPdf">
          <Page  rendermode="canvas"  pageNumber={pageNumber}
          height={900}
          // width="500"
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

         
         </div>
  )
}

export default Pdf

   {/* <Droppable droppableId='pdf'>
        { (provided)=> (
            <div ref={provided.innerRef} {...provided.droppableProps}>
    <Document file={pdfFile} onLoadSuccess={onPdfLoad}
    
    onItemClick={onItemClick()}   >
      Hi
          <Page  rendermode="canvas"  pageNumber={pageNumber}
           renderTextLayer={true}
          canvasBackground="blue"
           renderAnnotationLayer={true}
           >
        
          </Page>
           
         </Document>
 {provided.placeholder}
</div>
          )}

        </Droppable>  */}