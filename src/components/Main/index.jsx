import React from 'react';
import './index.css';
import TaskListBox from '../TaskListBox';
import TaskDetail from '../TaskDetail';
import { Route, Routes } from 'react-router-dom';

function Main(props) {
    const {todo, setToDo} = props
    return ( 
        <main className='main'>
            <Routes>
                <Route exact path={'/'} element={<TaskListBox todo={todo} setToDo={setToDo}/>} />
                <Route path={'/tasks/:taskId'} element={<TaskDetail todo={todo} setToDo={setToDo}/>} />
            </Routes>
        </main>
     );
}

export default Main;