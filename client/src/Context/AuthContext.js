

import React, {createContext, useState, useEffect} from "react";
import AuthService from "../Services/AuthService";


// export it so we can use it outside
// This will give us a provider and consumer
// Here we going to provide and consume a global state
export const AuthContext = createContext();

// deconstruct what comes back from props which is children
// Wrapping everything under children will provide the global state to the components
export default ({ children }) => {

    // hook will allow us to maintain the state within a functional component
    // Below we use Square Brackets " [ ] " because it's a function
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false); // is the app loaded to make a request to the server

    useEffect(() => {
        // this will be used as a component diMount
        AuthService.isAuthenticated().then(data => {

            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
        });
    }, []);

    return (
        // The value will say What do we want to make available as a global state
        // Here if any component want to update the states, we provide the values below
        <div>
            {!isLoaded ? <h1>Loading</h1> 
            : 
            <AuthContext.Provider value={{user,setUser,isAuthenticated, setIsAuthenticated}}> 
                { children }
            </AuthContext.Provider>}
        </div>
    )

}


