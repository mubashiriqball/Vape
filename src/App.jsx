import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Navbar/Header';
import Nav from './Components/Navbar/Nav';
import Home from './Components/Pages/Home';
import Products from './Components/Pages/Products';
import AboutUs from './Components/Pages/AboutUs';
import Login from './Components/Pages/Login';
import Forgetpassword from './Components/ForgetPassword/forgetpassword'; // Import the ForgotPassword component

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/footer';
import Details from './Components/Details/details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/details' element={<Details />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgetpassword' element={<Forgetpassword />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
