import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { ProtectedRoute } from "./components/protectedRoute";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
