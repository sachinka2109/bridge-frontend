import React,{useState,lazy,Suspense} from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
// import Home from '../components/dashboard/Home'
import Header from '../components/header/Header'
// import SignCombined from '../pages/Sign/SignCombined'
// import ForgotPassword from '../pages/Sign/ForgotPassword'
import ProtectedRoute from './ProtectedRoute'
import AuthRoute from './AuthRoute'
import AdminAuthRoute from './AdminAuthRoute'
import AdminProtectedRoute from './AdminProtectedRoute'
// import BookDetails from '../components/book-details/BookDetails'
// import MyOrder from '../pages/my-order/MyOrder'
// import Success from '../pages/Successful/Success'
// import MyCart from '../pages/cart/MyCart'
// import MyWishlist from '../pages/wishlist/MyWishlist'
// import AdminCombined from '../pages/admin/AdminCombined'
// import AdminProducts from '../pages/admin/AdminProducts'
// import AdminBookDetails from '../pages/admin/AdminBookDetails'
// import AdminAddBook from '../pages/admin/AdminAddBook'


const Home = lazy(() => import('../components/dashboard/Home'));
const SignCombined = lazy(() => import('../pages/Sign/SignCombined'));
const ForgotPassword = lazy(() => import('../pages/Sign/ForgotPassword'));
const BookDetails = lazy(() => import('../components/book-details/BookDetails'));
const MyOrder = lazy(() => import('../pages/my-order/MyOrder'));
const Success = lazy(() => import('../pages/Successful/Success'));
const MyCart = lazy(() => import('../pages/cart/MyCart'));
const MyWishlist = lazy(() => import('../pages/wishlist/MyWishlist'));
const AdminCombined = lazy(() => import('../pages/admin/AdminCombined'));
const AdminProducts = lazy(() => import('../pages/admin/AdminProducts'));
const AdminBookDetails = lazy(() => import('../pages/admin/AdminBookDetails'));
const AdminAddBook = lazy(() => import('../pages/admin/AdminAddBook'));

function Router() {
  const [page,changePage] = useState(false);
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProtectedRoute><><Header/><Home/></></ProtectedRoute>
            </Suspense>
          }/>
          <Route path='/signin' element={
            <Suspense fallback={<div>Loading...</div>}>
              <AuthRoute><SignCombined page={page} changePage={changePage}/></AuthRoute>
            </Suspense>
          } />
          <Route path="/signup" element={
            <Suspense fallback={<div>Loading...</div>}>
              <AuthRoute><SignCombined page={page} changePage={changePage}/></AuthRoute>
            </Suspense>
          }/>
          <Route path='/forgotpassword' element={
            <Suspense fallback={<div>Loading...</div>}>
              <AuthRoute><><Header/><ForgotPassword/></></AuthRoute>
            </Suspense>
          }/>
          <Route path='/book-details/:id' element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProtectedRoute><><Header/><BookDetails/></></ProtectedRoute>
            </Suspense>
          } />
          <Route path='/my-orders' element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProtectedRoute><><Header/><MyOrder/></></ProtectedRoute>
            </Suspense>
          }/>
          <Route path='/wishlist' element={
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute><><Header/><MyWishlist/></></ProtectedRoute>
          </Suspense>
          } />
          <Route path='/cart' element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProtectedRoute><><Header/><MyCart/></></ProtectedRoute>
            </Suspense>
            }/>
          <Route path='/success' element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProtectedRoute><><Header/><Success/></></ProtectedRoute>
            </Suspense>
          }/>
          <Route path='/profile' element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProtectedRoute><><Header/><Success/></></ProtectedRoute>
            </Suspense>
          }/>
          <Route path='/admin-login' element={
            <Suspense fallback={<div>Loading...</div>}>
              <AdminAuthRoute><><AdminCombined page={page} changePage={changePage}/></></AdminAuthRoute>
            </Suspense>
          }/>
          <Route path='/admin-signup' element={
            <Suspense fallback={<div>Loading...</div>}>
              <AdminAuthRoute><><AdminCombined page={page} changePage={changePage}/></></AdminAuthRoute>
            </Suspense>
          }/>
          <Route path='/admin/products' element={
            <Suspense fallback={<div>Loading...</div>}>
              <AdminProtectedRoute><><Header /><AdminProducts/></></AdminProtectedRoute>
            </Suspense>
          }/>
          <Route path='/admin/add-book' element={
            <Suspense fallback={<div>Loading...</div>}>
              <AdminProtectedRoute><><Header /><AdminAddBook/></></AdminProtectedRoute>
            </Suspense>
          }/>
          <Route path='/admin/book-details/:id' element={
            <Suspense fallback={<div>Loading...</div>}>
              <AdminProtectedRoute><><Header /><AdminBookDetails/></></AdminProtectedRoute>
            </Suspense>
          } />
          <Route path='/admin/book-details/:id?edit=true' element={
          <Suspense fallback={<div>Loading...</div>}>
            <AdminProtectedRoute><><Header /><AdminBookDetails/></></AdminProtectedRoute>
          </Suspense>
          } />
          {/* <Route path='*'>Error</Route> */}
        </Routes>
    </BrowserRouter>
  )
}

export default Router