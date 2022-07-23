import './App.css';
import Header from './Pages/SharedPage/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Login from './Pages/LoginPage/Login';
import Tools from './Pages/ToolPage/Tools';
import About from './Pages/About';
import Footer from './Pages/SharedPage/Footer';

function App() {
  return (
    <div >
      <Header></Header>
      <div class='bg-base-150 min-h-screen'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/tools' element={<Tools></Tools>}></Route>
          <Route path='about' element={<About></About>}></Route>
          <Route path='' element></Route>
          <Route path='' element></Route>
          <Route path='' element></Route>
          <Route path='' element></Route>
          <Route path='' element></Route>
          <Route path='' element></Route>
          <Route path='' element></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
