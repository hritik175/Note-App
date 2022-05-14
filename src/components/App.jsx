import React,{ useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes';
import Content from './Content';



function App(){

  const [notes, setNotes] = useState([])

  function addNote(newNote){
    setNotes((prevValue) => {
      return[...prevValue, newNote]
    })
  }
  return <div>
    <Header />
    <Content
    onAdd={addNote}/>
    {notes.map((noteItem) =>{
      return <Note title={noteItem.title} content={noteItem.content}/>
    } )}
    
    <Footer />
  </div>
}
export default App;