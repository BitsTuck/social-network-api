const { Schema, model }= require('mongoose');

const userSchema = new Schema({
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
        type: Schema.Types.ObjectId,
        ref: 'thought'
    },
    friends: {
        type: Schema.Types.ObjectId,
        ref: 'User'

    }

})

userSchema
    .virtual('friendCount')
    .get(function() {
        return this.friends;
    })



const handleError = (err) => console.error(err);

const User = model('user', userSchema);

User
.create([
    {username: 'bitstuck', email: 'bits@me.com'},
    {username: 'samtuck', email: 'sam@me.com',},
    {username: 'suztuck', email: 'suz@me.com',},
    {username: 'lilytuck', email: 'lily@me.com',},
    {username: 'robtuck', email: 'robin@me.com',},
    {username: 'archietuck', email: 'archie@me.com',}
])

.then(result => console.log('Created new User', result))
.catch(err => handleError(err))



module.exports = User;