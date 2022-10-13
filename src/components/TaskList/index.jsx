import { useState } from 'react';
import React from 'react';
import './index.css';
import { LIST_TYPES } from '../data/data.js';
import TaskForm from '../TaskForm';
import TaskSelect from '../TaskSelect';
import { Link } from 'react-router-dom';

function TaskList(props) {
    const { type, todo, setToDo, title, addToDo, moveToDo, prevTaskList} = props
    const [formOpen, setFormOpen] = useState(false)
    const disabled = prevTaskList.length === 0 ? true : false
    const initialValue = {
        title: "",
        description: ""
    }
    const [value, setValue] = useState(initialValue)
    const handleAddNewClick = () => {
        setFormOpen(!formOpen)
    }
    const formSubmit = (title) => {
        addToDo(title)
        setFormOpen(false)
        setValue(initialValue)
    }
    const selectChange = (id, type) => {
        moveToDo(id, type)
        setFormOpen(false)
    }
    return (
    <div className='task-list'>
        <h2 className='task-list-title'>{title}</h2>
        <nav className='task-table'>
            {todo.map(task => (
                <Link to={`/tasks/${task.id}`} key={task.id} className='task-table-link'><li className ="task-table-li" key={task.id}>
                    {task.title}</li></Link>
            ))
        }
        </nav>
        {type === LIST_TYPES.BACKLOG && formOpen && (
            <TaskForm 
                formSubmit={formSubmit} 
                setFormOpen={setFormOpen}
                value={value}
                setValue={setValue}/>
        )}
        {type !== LIST_TYPES.BACKLOG && formOpen && (
            <TaskSelect 
                prevTaskList={prevTaskList}
                setFormOpen={setFormOpen}
                value={value}
                setValue={setValue}
                setToDo={setToDo}
                type={type}
                todo={todo}
                selectChange={selectChange}
            />
        )}
        {type === LIST_TYPES.BACKLOG && <button 
            className={`task-list-add-btn ${formOpen ? "inactive" : "active"}`} 
            onClick={handleAddNewClick}>
            + Add card</button>
        }
        {type !== LIST_TYPES.BACKLOG && <button 
            className={`task-list-add-btn ${formOpen ? "inactive" : "active"}`} 
            disabled = {disabled}
            onClick={handleAddNewClick}>
            + Add card</button>
        }
    </div>
    );
}

export default TaskList;