import { Routes, Route, Navigate } from 'react-router';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';
import Home from './Pages/Home/Home';
import CreateReport from './Pages/CreateReport/CreateReport';
import EditReport from './Pages/EditReport/EditReport';
import ReportDetails from './Pages/ReportDetails/ReportDetails';

function App() {
  return (
    <Routes>
      <Route path="/report/:id" element={<ReportDetails />} />
      <Route path="/edit-report/:id" element={<EditReport />} />
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
