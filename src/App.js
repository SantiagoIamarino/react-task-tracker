import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/shared/Header'
import TaskDetail from './components/TaskDetail'
import Tasks from './components/Tasks'
import { taskReducer } from './reducers/taskReducer'

const store = createStore(taskReducer)

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <div className='container'>
            <Header 
              title='Task Manager' 
            />

            <Routes>

              <Route path='/' element={
                <Tasks />
              } />

              <Route path='/about' element={
                <About />
              } />

              <Route path='/task/:id' element={
                <TaskDetail />
              } />
              
            </Routes>

            <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App