
export default {

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
    },

    createAssignment : (obj) => {

        // Need to change the API Route to put instead of POST to make the updates
        return fetch('/api/createAssignment',{
            method : "POST",
            body : JSON.stringify(obj),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
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