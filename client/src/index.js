

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from "./Context/AuthContext";



// The App component below will get passed to children under the AuthProvider 
// The entire app will now have access to user and isAuthenticated global states 
ReactDOM.render(
        <AuthProvider>
             <App />
        </AuthProvider>    
    ,
    document.getElementById('root')
    );
    
// registerServiceWorker();
