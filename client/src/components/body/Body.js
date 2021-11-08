import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import ActivationEmail from './auth/ActivationEmail'
import NotFound from '../utils/NotFound/NotFound'
import Dashboard from '../body/dashboard/dashboard'
import ForgotPass from '../body/auth/ForgotPassword'
import ResetPass from '../body/auth/ResetPassword'
import Cart from './cart/cart'
import Profile from '../body/profile/Profile'
import EditUser from '../body/profile/EditUser'
import Orderdetails from './orderdetail/orderdetails'
import Orders from './orders/orders'
import Home from '../body/home/Home'
import ProfessionalProfile from '../body/proprofile/ProfessionalProfile'
import {useSelector} from 'react-redux'
import ProRegister from './proregister/ProfRegister'
import Detailedservice from './services/detailedservice'
import Setupprofile from './setupprofile/setupprofile'
function Body() {
    const auth = useSelector(state => state.auth)
    const {isLogged, isAdmin} = auth
    return (
        <section>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/dashboard" component={Dashboard} exact />
                <Route path="/login" component={isLogged ? NotFound : Login} exact />
                <Route path="/register" component={isLogged ? NotFound : Register} exact />
                <Route path="/cart" component={isLogged ?Cart: NotFound }/>
                <Route path="/orderdetails"  component={isLogged ? Orderdetails: NotFound } />
                <Route path="/orders"  component={isLogged ? Orders: NotFound } />
                <Route path="/professionalprofile"  component={isLogged ?ProfessionalProfile : NotFound }/>
                <Route path="/proregister"  component={ProRegister}/>
                <Route path="/services"  component={Detailedservice}/>
                <Route path="/setupprofile" component ={isLogged ? Setupprofile : NotFound }/>

                <Route path="/forgotpassword" component={isLogged ? NotFound : ForgotPass} exact />
                <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPass} exact />

                <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />

                <Route path="/profile" component={isLogged ? Profile : NotFound} exact />
                <Route path="/edit_user/:id" component={isAdmin ? EditUser : NotFound} exact />

            </Switch>
        </section>
    )
}

export default Body
