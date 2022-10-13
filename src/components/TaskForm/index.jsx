import React from 'react';
import './index.css';

function TaskForm(props) {
    const { formSubmit, setFormOpen, value, setValue } = props
    const handleChange = e => {
        const fieldName = e.target.name
        setValue({...value, [fieldName]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (value.title) {
            formSubmit(value.title, value.description)
        }
        setFormOpen(false)
    }
    return ( 
        <form className='task-list-add-task' onSubmit={handleSubmit}>
            <input 
                value={value.title} 
                name='title'
                type='text'
                placeholder="Enter a task" 
                onChange={handleChange} 
                className="task-list-input"/>
            <button 
                type='submit'
                className="task-list-submit-btn">
                Submit
            </button>
        </form>
     );
}

export default TaskForm;