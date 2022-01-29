import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "../Home/Home";
import QuizManager from "../QuizManager/QuizManager";

function App() {
  return (
      <BrowserRouter>
          <div className="wrapper">
              <h2>Quiz Manager</h2>
                <Routes>
                    <Route path='/' element={Home()} />
                    <Route path='/quizmanager' element={QuizManager()} />
                </Routes>
            </div>
      </BrowserRouter>
    );
}

export default App;
