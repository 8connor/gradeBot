
import React, {useContext} from 'react';
import {Route,Redirect} from 'react-router-dom';


import { AuthContext } from '../Context/AuthContext';

const PrivateRoute = ({component : Component, roles, ...rest})=>{
    const { isAuthenticated, user} = useContext(AuthContext);

    return(
        <Route {...rest} render={props =>{
            // If the user has not logged in, redirect to the login page
            if(!isAuthenticated){

                return <Redirect to={{ pathname: '/login', 
                                       state : {from : props.location}}}/>
            }
                
            
            if(!roles.includes(user.accessType)) {
                
                return <Redirect to={{ pathname: '/', 
                                 state : {from : props.location}}}/>
            }
            
            return <Component {...props}/>
        }}/>
    )
}

export default PrivateRoute;

