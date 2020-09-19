

export default {

    postUser : user => {

        return fetch("/api/adminCreateUser", {
            method : "POST",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => {
            if(res.status !== 401){
                return res.json().then(data => data);
            }
            else
                return {message : {msgBody : "UnAuthorized"},msgError : true};
        })
    },

    getAllClass : () => {
        return fetch("/api/allClasses")
        .then(res => {

            // if the request doesn't fail then return the data
            if(res.status !== 401){
                return res.json().then(data => data);
            }
            else
                return {message : {msgBody : "UnAuthorized"},msgError : true};        
        })
    }

}

