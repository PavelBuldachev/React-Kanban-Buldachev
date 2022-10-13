import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  let tasks = JSON.parse(window.localStorage.getItem('todo'))
  tasks = tasks ? tasks : []
  const [todo, setToDo] = useState(tasks)
  useEffect(() => {
    window.localStorage.setItem('todo', JSON.stringify(todo))
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main todo={todo} setToDo={setToDo}/>
        <Footer todo={todo}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
