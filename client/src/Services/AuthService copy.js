

// This will seperate concerns so we don't store everything within our components
export default {
    
     // To login with our form
    login : user =>{
        console.log(user);
        return fetch('/api/login',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => {
            if(res.status !== 401)
                return res.json().then(data => data);
            else   // passport is sending a 401 code
                return { isAuthenticated : false, user : {email : "",accessType : ""}};
        })
    },
    register : user =>{
        console.log(user);
        return fetch('/api/register',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
          .then(data => data);
    },
    logout : ()=>{
        return fetch('/api/logout')
                .then(res => res.json())
                .then(data => data);
    },


    // persist authentication, set a state within our app react letting the client know that our user has been authenticated
    // This will sync both back and front ends
    isAuthenticated : () => {

        console.log("In isAuthenticated within the Auth Service js");

        
        return fetch("/api/authenticated")
        .then(res => {
            console.log("response from isAuthenticated");
            // Means that this is a response we wrote ourselves
            // passport actually sends a 401
            if(res.status !== 401) {
                console.log("In Auth Service isAuthenticated not 401");
                return res.json().then(data => data);
            }
            else {
                // passport is sending a 401 code
                console.log("In Auth Service isAuthenticated ELSE");
                return {isAuthenticated : false, user : {email : "" , accessType : ""}};
            }
                
        })
        .catch(() => console.log("Can’t access "))


    }

}