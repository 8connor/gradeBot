

export default {

    createClass : () => {
        return fetch("/api/createClass")
        .then( res => {

            // if the request doesn't fail then return the data
            if(res.status !== 401){
                return res.json().then(data => data);
            }
            else
                return {message : {msgBody : "UnAuthorized"},msgError : true}; 

        })
        
    },

    createStudentQuery : (obj) => {

        return fetch('/api/studentQuery',{
            method : "post",
            body : JSON.stringify(obj),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => {
            if(res.status !== 401)
                return res.json().then(data => data);
            else // passport is sending a 401 code
                return { isAuthenticated : false, user : {email : "",accessType : ""}};
        })

    },

    addStudentList : (obj) => {

        return fetch('/api/addStudentList',{
            method : "post",
            body : JSON.stringify(obj),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => {
            if(res.status !== 401)
                return res.json().then(data => data);
            else // passport is sending a 401 code
                return { isAuthenticated : false, user : {email : "",accessType : ""}};
        })

    }

}


