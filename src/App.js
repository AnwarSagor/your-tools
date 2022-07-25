import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/SharedPage/Header';
import Home from './Pages/HomePage/Home';
import Tools from './Pages/ToolPage/Tools';
import About from './Pages/About';
import Footer from './Pages/SharedPage/Footer';
import SignIn from './Pages/LoginPage/SignIn';
import SignUp from './Pages/LoginPage/SignUp';
import Purchase from './Pages/ToolPage/Purchase';
import RequireAuth from './Pages/LoginPage/RequireAuth';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/tools' element={<Tools></Tools>}></Route>
        <Route path='/purchase' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='' element></Route>
        <Route path='' element></Route>
        <Route path='' element></Route>
        <Route path='' element></Route>
        <Route path='/signIn' element={<SignIn></SignIn>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
