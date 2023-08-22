import React,{useState} from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../components/dashboard/Home'
import Header from '../components/header/Header'
import SignCombined from '../pages/Sign/SignCombined'
import ForgotPassword from '../pages/Sign/ForgotPassword'
import ProtectedRoute from './ProtectedRoute'
import AuthRoute from './AuthRoute'
import BookDetails from '../components/book-details/BookDetails'
import MyOrder from '../components/my-order/MyOrder'
import Success from '../pages/Successful/Success'

function Router() {
  const [page,changePage] = useState(false);

  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<ProtectedRoute><><Header/><Home/></></ProtectedRoute>}/>
            <Route path='/login' element={<AuthRoute><SignCombined page={page} changePage={changePage}/></AuthRoute>} />
            <Route path="/signup" element={<AuthRoute><SignCombined page={page} changePage={changePage}/></AuthRoute>}/>
            <Route path='/forgotpassword' element={<ForgotPassword/>} />
            <Route path='/book-details/' element={<><Header/><BookDetails/></>} />
            <Route path='/my-orders' element={<><Header/><MyOrder/></>} />
            <Route path='/success' element={<><Header/><Success/></>} />
            {/* <Route path='*'>Error</Route> */}
        </Routes>
    </BrowserRouter>
  )
}

export default Router