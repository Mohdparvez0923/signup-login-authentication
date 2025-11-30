import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/login'
import Signup from './components/signup'
import Dashboard from './components/dashboard'
import ProtectedRoute from './components/ProtectedRoute'

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate to="/login"/>}/>
      <Route path="/login" element={
          <Login/>
      }/>
      <Route path="/signup" element={
          <Signup/>
      }/>
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
      }/>

    </Routes>
     
    </>
  )
}

export default App
