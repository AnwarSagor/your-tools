import './App.css';
import Header from './Pages/SharedPage/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Tools from './Pages/ToolPage/Tools';
import About from './Pages/About';
import Footer from './Pages/SharedPage/Footer';
import SignIn from './Pages/LoginPage/SignIn';

function App() {
  return (
    <div >
      <Header></Header>
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
        <Route path='/signIn' element={<SignIn></SignIn>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
