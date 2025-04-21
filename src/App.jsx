import { useState } from 'react'
import TaskItem from "./components/TaskItem"
import TaskAdd from "./components/TaskAdd"
import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {
  const [itens,setItem] = useState([])

    let insertItem = (value) => 
    { 
      if(typeof value != "undefined" && value.length > 0)
      {
        setItem((old) => [...old,{'id' : uuidv4(), 'description' : value }])
      }
      else
      {
         alert("Campo não preenchido");
      }
        
    }

    let deleteItem = (id) => 
    { 
        const newArray = itens.filter((it) => it.id != id)
        setItem(newArray)
    }

    return (
        <div className="task">


            <TaskAdd insertItem={insertItem}/>

            <div className='task-item'>

              {itens.length > 0 &&
                  itens.map((it) => <TaskItem  key={it.id} deleteItem={deleteItem} item={it}/>)
              }

            </div>

        </div>
    )
}

export default App
