import React,{useState} from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../components/dashboard/Home'
import Header from '../components/header/Header'
import SignCombined from '../pages/Sign/SignCombined'
import ForgotPassword from '../pages/Sign/ForgotPassword'
import ProtectedRoute from './ProtectedRoute'
import AuthRoute from './AuthRoute'
import BookDetails from '../components/book-details/BookDetails'
import MyOrder from '../pages/my-order/MyOrder'
import Success from '../pages/Successful/Success'
import MyCart from '../pages/cart/MyCart'
import MyWishlist from '../pages/wishlist/MyWishlist'

function Router() {
  const [page,changePage] = useState(false);

  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<ProtectedRoute><><Header/><Home/></></ProtectedRoute>}/>
            <Route path='/login' element={<AuthRoute><SignCombined page={page} changePage={changePage}/></AuthRoute>} />
            <Route path="/signup" element={<AuthRoute><SignCombined page={page} changePage={changePage}/></AuthRoute>}/>
            <Route path='/forgotpassword' element={<ForgotPassword/>} />
            <Route path='/book-details/:id' element={<ProtectedRoute><><Header/><BookDetails/></></ProtectedRoute>} />
            <Route path='/my-orders' element={<ProtectedRoute><><Header/><MyOrder/></></ProtectedRoute>} />
            <Route path='/wishlist' element={<ProtectedRoute><><Header/><MyWishlist/></></ProtectedRoute>} />
            <Route path='/cart' element={<ProtectedRoute><><Header/><MyCart/></></ProtectedRoute>} />
            <Route path='/success' element={<ProtectedRoute><><Header/><Success/></></ProtectedRoute>} />
            <Route path='/profile' element={<ProtectedRoute><><Header/><Success/></></ProtectedRoute>} />
            <Route path='/admin' element={<ProtectedRoute><><Header/><Success/></></ProtectedRoute>} />
            {/* <Route path='*'>Error</Route> */}
        </Routes>
    </BrowserRouter>
  )
}

export default Router