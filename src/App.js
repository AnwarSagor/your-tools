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
import ToolDetail from './Pages/ToolPage/ToolDetail';

function App() {
  return (
    <div >
      <Header></Header>

      <div className='my-4 mb-12 pb-4'>
        <Routes>

          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/tools' element={<Tools></Tools>}></Route>

          <Route path='/tool/:toolId' element={
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
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
