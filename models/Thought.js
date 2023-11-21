const { Schema, model }= require('mongoose');

const reactionSchema = new Schema ({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: 'generated'
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

const thoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        // createdAt: date(get timestamp data),
        // username: references user,
        reactions: [reactionSchema]
    }
})

const Thought = model('Thought', thoughtSchema);

const handleError = (err) => console.error(err);

module.exports = Thought;


