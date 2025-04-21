import { useState } from "react"
import './style.css'

export default function TaskAdd({insertItem})
{
    const [item,setItem] = useState()

    return (
        <div className="task-add">
            <input type="text" name="" id="" onChange={(e) => setItem(e.target.value)}/>
            <button onClick={() => insertItem(item)}>Add</button>
        </div>
    )
}