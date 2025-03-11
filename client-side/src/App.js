import logo from './logo.svg';
import './App.css';
import MainClient from './components/MainClient';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { UserProvider } from './components/UserContext';
import PrivateRoute from './components/PrivateRoutes';
import AlredyLogin from './components/AlredyLogin';
import Hotels from './components/Hotels';
import UserLogin from './components/UserLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewHotel from './components/ViewHotel';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Bookings from './components/Bookings';
import NoPage from './NoPage';

function App() {
  return (
    <Router>
      <UserProvider>
        {/* Add ToastContainer here */}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover />
        <Routes>
          <Route index element={<PrivateRoute><MainClient /></PrivateRoute>} />
          <Route path="/hotels" element={<PrivateRoute><Hotels /></PrivateRoute>} />
          <Route path="/bookings" element={<PrivateRoute><Bookings /></PrivateRoute>} />
          <Route path="/Login" element={<AlredyLogin><UserLogin /></AlredyLogin>} />
          <Route path="/ViewHotel/:id" element={<ViewHotel />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
