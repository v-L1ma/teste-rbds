import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
