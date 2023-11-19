const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema ({
    thoughtText: {
        type: String,
        // createdAt: date(get timestamp data),
        // username: references user,
        //reactions: reactionSchema only
    }
})


const reactionSchema = new mongoose.Schema ({
    reactionId: {
        type: ObjectId
        //default value
    },
    reactionBody: {
        type: String,
        required: true, 
        length: 280,
    },
    username: {
        type: String, 
        required: true
    },
    createdAt: {
        //date, current timestamp, get timestamp data)
    }

})