import './App.css';
import Footer from './Component/Footer/Footer';
import LoginPage from './Component/LoginPage/LoginPage';
import Navbar from './Component/Navbar/Navbar';
import SecurityPage from './Component/SecurityPage/SecurityPage';
import SignupPage from './Component/SignupPage/SignupPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path="SignupPage" element={<SignupPage />} />
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="SecurityPage" element={<SecurityPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
