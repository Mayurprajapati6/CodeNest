
import { Routes,Route } from 'react-router-dom'
import './App.css'
import { CreateProject } from './pages/CreateProject'
import { Router } from './Router'
import { io } from 'socket.io-client';



function App() {
  const socket = io("http://localhost:3000");
  

  return (
    <Router />
  )
  
}

export default App
