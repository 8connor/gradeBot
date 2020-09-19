

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
        
    }

}


