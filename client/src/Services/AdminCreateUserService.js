

export default {
    postUser: user => {
        console.log(user);
        return fetch('/api/register', {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => data);
    },
    getAllClass: () => {
        return fetch("/api/allClasses")
            .then(res => {

                // if the request doesn't fail then return the data
                if (res.status !== 401) {
                    return res.json().then(data => data);
                }
                else
                    return { message: { msgBody: "UnAuthorized" }, msgError: true };
            })
    }

}

