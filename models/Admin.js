

const Admin = new mongoose.Schema({
    Email: {
        type: String,
        unique: true
    },
    Password:{
        type: String,
    },
    isAdmin:{
        type: Boolean
    }
})

