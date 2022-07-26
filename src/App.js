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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/DashboardPage/Dashboard';
import MyOrders from './Pages/DashboardPage/MyOrders';
import AddReview from './Pages/DashboardPage/AddReview';
import MyProfile from './Pages/DashboardPage/MyProfile';

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

          <Route path='/dashboard' element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }>
            <Route index element={<MyOrders></MyOrders>}></Route>
            <Route path='addReview' element={<AddReview></AddReview>}></Route>
            <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
          </Route>

          <Route path='about' element={<About></About>}></Route>
          <Route path='' element></Route>
          <Route path='' element></Route>
          <Route path='' element></Route>
          <Route path='' element></Route>
          <Route path='/signIn' element={<SignIn></SignIn>}></Route>
          <Route path='/signUp' element={<SignUp></SignUp>}></Route>

        </Routes>
        <ToastContainer />
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
