const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true, 
        trimmed: true,
    },
    email: {
        type: String, 
        required: true, 
        matchMedia: true,
    }, 
    thoughts: {
        //array, references Thought model
    },
    friends: {
        //self-reference other users
    }

})

const User = mongoose.model('User', userSchema);

const handleError = (err) => console.error(err);

User
.create({

})

.then(result => console.log('Created new User', result))
.catch(err => handleError(err))

module.exports = User;