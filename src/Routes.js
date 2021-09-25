import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './components/Home';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import Shop from './components/Shop';

import PrivateRoute from './components/auth/PrivateRoute';
import Dashboard from './user/UserDashboard';

import AdminRoute from './components/auth/AdminRoute';
import AdminDashboard from './user/AdminDashboard';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/shop' exact component={Shop} />
                <Route path='/signin' exact component={Signin} />
                <Route path='/signup' exact component={Signup} />

                <PrivateRoute path='/user/dashboard' exact component={Dashboard} />
                <AdminRoute path='/admin/dashboard' exact component={AdminDashboard} />
                <AdminRoute path='/create/category' exact component={AddCategory} />
                <AdminRoute path='/create/product' exact component={AddProduct} />
            </Switch>
        </BrowserRouter>
    )
};
