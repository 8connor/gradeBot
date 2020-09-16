

export default {

    postUser : user => {
        return fetch("", {
            method : "post",
            body : JSON.stringify(user),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(res => {
            if(res.status !== 401){
                return res.json().then(data => data);
            }
            else
                return {message : {msgBody : "UnAuthorized"},msgError : true};
        })
    }

}

