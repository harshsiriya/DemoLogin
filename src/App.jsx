import './App.css'
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </>
  )
}

export default App
