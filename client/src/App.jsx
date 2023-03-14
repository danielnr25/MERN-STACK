import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navigations/Navbar'
import TaskForm from './components/pages/TaskForm'
import TasksError from './components/pages/TasksError'
import TasksPage from './components/pages/TasksPage'
import TaskContextProvider from './context/TaskProvider'



function App() {
  return (
    <div className='bg-gray-100 text-gray-900 h-screen'>
          <Navbar />
      <div className="container mx-auto py-4 px-20">
        <TaskContextProvider>
          <Routes>
            <Route path='/' element={<TasksPage />} />
            <Route path='/new' element={<TaskForm />} />
            <Route path='/edit/:id' element={<TaskForm />} />
            <Route path='*' element={<TasksError />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  )
}

export default App