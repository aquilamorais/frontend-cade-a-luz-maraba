import { Routes, Route, Navigate } from 'react-router';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import CreateReport from './Pages/CreateReport';
import ReportDetails from './Pages/ReportDetails';

function App() {
  return (
    <Routes>
      <Route path="/report/:id" element={<ReportDetails />} />
      <Route path="/create-report" element={<CreateReport />} />
      <Route path="/home" element={<Home />} />
      <Route path="/user" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;

