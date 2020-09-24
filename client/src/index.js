

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from "./Context/AuthContext"
import './assets/css/fontawesome-all.css';
import './assets/css/flaticon.css';


// The App component below will get passed to children under the AuthProvider 
// The entire app will now have access to user and isAuthenticated global states 
ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>,
    document.getElementById('root')
    );
    
// registerServiceWorker();
