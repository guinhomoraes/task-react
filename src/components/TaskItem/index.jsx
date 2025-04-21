import './style.css'

export default function TaskItem({item, deleteItem})
{

    return (
        <div className='task-item-list'>
            <span>{item.description}</span>
            <button onClick={() => deleteItem(item.id)}>x</button>
        </div>
    )
}