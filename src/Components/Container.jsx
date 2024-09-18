import { useState, useEffect} from "react";
import Todoinput from "./TodoInput";
import TodoList from "./TodoList";

export default function Container(){
    const [list,setlist] = useState([])
    const [newval,setnewval] = useState('')
    
    function persistData(newlist){
        localStorage.setItem('list',JSON.stringify({list:newlist}))
    }

    function addlist(newlistitem){
        const newlist = [...list,newlistitem]
        persistData(newlist)
        setlist(newlist)
        
    }

    function handledelete(index){
        const newlist = list.filter((list,listidx) => {
            return listidx !== index
        })
        persistData(newlist)
        setlist(newlist)

    }
    function handleedit(idx){
        const editval = list[idx]
        setnewval(editval)
        handledelete(idx)
    }
    useEffect(() => {
        if(!localStorage){
            return
        }
        let locallist = localStorage.getItem('list')
        if(!locallist){
            return
        }
        locallist = JSON.parse(locallist).list
        setlist(locallist)
    } , [])
    return(
        <>
        <Todoinput newval={newval} setnewval={setnewval} addlist={addlist}/>
        <TodoList handledelete ={handledelete} list = {list} handleedit={handleedit}/>
        </>
        
    )
}