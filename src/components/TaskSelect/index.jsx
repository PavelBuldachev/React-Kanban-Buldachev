import React from "react";
import "./index.css";

function TaskSelect(props) {
    const {prevTaskList, type, selectChange} = props
    
    function handleSelectChange(e) {
        let task = null
        if (e.target.selectedIndex > 0) {
            task = prevTaskList[e.target.selectedIndex - 1]
            selectChange(task.id, type)
        }
    }
    return ( 
        <form className='task-list-select-task' >
            <select defaultValue={'DEFAULT'} className="task-list-select" onChange={handleSelectChange}>
                <option value='DEFAULT' disabled className="task-list-option">Select task</option>
                {prevTaskList.map((task) => {
                    return <option className="task-list-option" key={task.id}>{task.title}</option>
                })}
            </select>
        </form>
     );
}

export default TaskSelect;