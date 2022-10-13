import React from 'react';
import './index.css';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function TaskDetail() {
    const params = useParams()
    const tasksList = JSON.parse(localStorage.getItem("todo"))
    const task = tasksList.find((task) => task.id === params.taskId)
    const [description, setDescription] = useState(task && task.description.length > 0 ? task.description : 'This task has no description')
    const handleFocus = () => {
        if (description === 'This task has no description') {
            setDescription('')
        }
    }
    const handleExitClick = () => {
        const newTasksList = tasksList.map(detail => {
            if (detail.id === task.id) {
                detail.description = description === 'This task has no description' ? '' : description
            }
            return detail
        })
        window.localStorage.setItem('todo', JSON.stringify(newTasksList))
    }
    return ( 
        <div className="task-detail">
            <div className="task-detail-content">
                <div className="task-detail-title">{task.title}</div>
                <textarea value = {description} onChange={(e) => setDescription(e.target.value)} className="task-detail-description" onFocus={handleFocus}/>
            </div>
            <Link to='/' onClick={handleExitClick}><div className="task-detail-exit"></div></Link>
        </div>
     );
}

export default TaskDetail;