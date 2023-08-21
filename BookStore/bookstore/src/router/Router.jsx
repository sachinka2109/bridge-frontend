import React,{useState} from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../components/dashboard/Home'
import SignCombined from '../pages/Sign/SignCombined'
import ForgotPassword from '../pages/Sign/ForgotPassword'
import ProtectedRoute from './ProtectedRoute'
import AuthRoute from './AuthRoute'

function Router() {
  const [page,changePage] = useState(false);
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
            <Route path='/login' element={<AuthRoute><SignCombined page={page} changePage={changePage}/></AuthRoute>} />
            <Route path="/signup" element={<AuthRoute><SignCombined page={page} changePage={changePage}/></AuthRoute>}/>
            <Route path='/forgotpassword' element={<ForgotPassword/>} />
            {/* <Route path='*'>Error</Route> */}
        </Routes>
    </BrowserRouter>
  )
}

export default Router