

import React, {useState, useContext} from "react";
import AuthService from  "../../Services/AuthService";
import Message from "../Message"; // Message from the server
import {AuthContext} from "../../Context/AuthContext"; // Global State components



const Login = props => {
    const [user,setUser] = useState({email: "", password : ""});
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const onChange = (e) => {
        e.preventDefault();

        setUser({...user,[e.target.name] : e.target.value});
    }

    const onSubmit = e => {
        e.preventDefault();

        console.log("IN on Submit")
        console.log(user);
        
        AuthService.login(user).then(data => {
           
            console.log("in Login about to make Call")
            console.log(data);
            
            const {isAuthenticated, user, message} = data;

            if(isAuthenticated){
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);

                // here we going to navigate to our todos page
                props.history.push("/dashboard");
            }
            else {
                setMessage(message);
            }
        })
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <h3>Please Sign In</h3>
                <label htmlFor="email" className="sr-only">Email : </label>
                <input 
                    type="text" 
                    name="email" 
                    onChange={onChange} 
                    className="form-control" 
                    placeholder="Enter Email"/>

                <label htmlFor="password" className="sr-only">Password : </label>
                <input 
                    type="password" 
                    name="password" 
                    onChange={onChange} 
                    className="form-control" 
                    placeholder="Enter Password"/>

                <button 
                    className="btn btn-lg btn-primary btn-block" 
                    type="submit">Log In</button>


            </form>

            {/* In case we have a message to display */}
            {message ? <Message message={message}/> : null}

        </div>
    )
}



export default Login;


