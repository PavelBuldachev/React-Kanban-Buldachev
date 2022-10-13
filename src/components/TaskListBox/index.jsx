import React from 'react';
import TaskList from '../TaskList';
import './index.css';
import { LIST_TYPES, LIST_COPY } from '../data/data.js';
import { v4 as uuidv4 } from 'uuid';

function TaskListBox(props) {
    const { todo, setToDo } = props
    function addToDo(title) {
        const task = {id: uuidv4(), title, description: "", type: LIST_TYPES.BACKLOG}
        setToDo([...todo, task])
    }

    function moveToDo(id, type) {
        const newToDo = todo.map(task => {
            task.type = task.id === id ? type : task.type 
            return task
          })     
        setToDo(newToDo)
    }
    
    return ( 
        <div className='task-list-box'>
            {Object.values(LIST_TYPES).map(type => {
                const curTaskList = todo.filter(task => task.type === type)
                const prevTaskList = todo.filter(task => task.type === type - 1)
                return (
                    <TaskList 
                        key={LIST_COPY[type]} 
                        type={type} 
                        title={LIST_COPY[type]} 
                        todo={curTaskList || []} 
                        prevTaskList={prevTaskList}
                        addToDo={addToDo}
                        moveToDo={moveToDo}/>
                )
            })}
        </div>
     );
}

export default TaskListBox;