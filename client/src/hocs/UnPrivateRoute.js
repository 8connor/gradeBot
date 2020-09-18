
import React, {useContext} from 'react';
import {Route,Redirect} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const UnPrivateRoute = ({component : Component,...rest})=>{
    const { isAuthenticated } = useContext(AuthContext);
    
    return(
        <Route {...rest} render={props =>{
            // If user is authenticated, redirect to the home page
            if(isAuthenticated)
                return <Redirect to={{ pathname: '/', 
                                       state : {from : props.location}}}/>
                                       
            return <Component {...props}/>
        }}/>
    )
}

export default UnPrivateRoute;

