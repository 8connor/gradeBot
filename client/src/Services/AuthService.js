
export default {
    
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
            else
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

    isAuthenticated : ()=>{
        return fetch('/api/authenticated')
                .then(res=>{
                    console.log("in is Authenticated Service")
                    console.log(res);
                    if(res.status !== 401)
                        return res.json().then(data => data);
                    else
                        return { isAuthenticated : false, user : {email : "",accessType : ""}};
                });
    }

}