import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/SharedPage/Header';
import Home from './Pages/HomePage/Home';
import Tools from './Pages/ToolPage/Tools';
import About from './Pages/About';
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
import Users from './Pages/DashboardPage/Users';
import AddTool from './Pages/DashboardPage/AddTool';
import Payment from './Pages/DashboardPage/Payment';
import Cancel from './Pages/DashboardPage/Cancel';
import NotFound from './Pages/SharedPage/NotFound';
import Blogs from './Pages/Blogs';
import Test from './Pages/Test';
import DeleteTool from './Pages/DashboardPage/DeleteTool';

function App() {

  return (
    <div >
      <div className='sticky top-0 z-50 mb-16'>
        <Header></Header>
      </div>

      <div>
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
            <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
            <Route path='addReview' element={<AddReview></AddReview>}></Route>
            <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
            <Route path='users' element={<Users></Users>}></Route>
            <Route path='addTool' element={<AddTool></AddTool>}></Route>
            <Route path='deleteTool' element={<DeleteTool></DeleteTool>}></Route>
            <Route path='payment/:id' element={<Payment></Payment>}></Route>
            <Route path='cancel/:id' element={<Cancel></Cancel>}></Route>
          </Route>

          <Route path='about' element={<About></About>}></Route>
          <Route path='blogs' element={<Blogs></Blogs>}></Route>

          <Route path='/signIn' element={<SignIn></SignIn>}></Route>
          <Route path='/signUp' element={<SignUp></SignUp>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>

          <Route path='/test' element={<Test></Test>}></Route>
          <Route path='' element></Route>
        </Routes>
        <ToastContainer />
      </div>

    </div>
  );
}

export default App;
