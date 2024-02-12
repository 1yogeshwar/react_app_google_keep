
import React, { useState } from "react";
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateNote from "./CreateNote";


const App = () => {
  
  const [addItem, setAddItem] =useState([])    
  const addNote =(item)  => {
       setAddItem((preData) =>{
        return [...preData, item];
       })  
  }

  const onDelete =(id) =>{
    setAddItem((oldData)=>{
        return oldData.filter((currData, idx) =>{
            return idx !==id;
        })
    })



   }
    return (
        <>
          <Header /> 
          <CreateNote  passNote={addNote} />  
         { addItem.map((val, index)=>{
            return <Note 
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}

            />
          })}
       
          <Footer />   
        </>
    );
}

export default App;
