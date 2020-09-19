

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

    changeGrade : (grade) => {

        // Need to change the API Route to put instead of POST to make the updates
        return fetch('/api/changeGrade',{
            method : "POST",
            body : JSON.stringify(grade),
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

    },

    postAssignment : (assignment) => {

          return fetch('/api/specificClass',{
            method : "POST",
            body : JSON.stringify(assignment),
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
    },

    postSpecificGrades : (grades) => {

        return fetch('/api/specificGrade',{
            method : "POST",
            body : JSON.stringify(grades),
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

