import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Signin from '../pages/Sign/Signin'
import Signup from '../pages/Sign/Signup'
import Home from '../components/Dashboard/Home'
import AuthRoute from './AuthRoute'
import ProtectedRoute from './ProtectedRoute'

function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<AuthRoute><Signin/></AuthRoute>}/>
                    <Route path='/signup' element={<AuthRoute><Signup/></AuthRoute>}/>
                    <Route path="/dashboard" element={<ProtectedRoute><Home/></ProtectedRoute>} />
                    <Route path='*'>Error</Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router