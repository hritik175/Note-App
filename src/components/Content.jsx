import React, { useState } from 'react';


function Content(props){

    const[note, setNote] = useState({
        title: '',
        content: ''
    });

    function handleChange(event){
        const {name, value} = event.target;
        setNote(prevValue =>{
            return{
                ...prevValue,
                [name]: value 
            }
        })
    }
    function submitNote(event){
        props.onAdd(note)
        event.preventDefault()
    }
    return(
        <div>
            <form>
                <input onChange={handleChange} value={note.title}name='title' placeholder='Add Title'/>
                <textarea onChange={handleChange} name='content' value={note.content} placeholder='Add Content' rows={4}/> 
                <button onClick={submitNote}> + </button>
            </form>
        </div>
    )
}

export default Content