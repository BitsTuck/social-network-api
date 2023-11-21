const { Schema, model }= require('mongoose');

const reactionSchema = new Schema ({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: 'generated'
    },
    reactionBody: {
        type: String,
        required: true, 
        maxlength: 280,
    },
    username: {
        type: String, 
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

})

const thoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    reactions: {
        ref: [reactionSchema]
    }
})



const handleError = (err) => console.error(err);

const Thought = model('thought', thoughtSchema);

Thought
.create([
    {thoughtText: 'you look great!', username: 'bitstuck'},
    {thoughtText: 'I love this!!!!', username: 'suztuck'},
    {thoughtText: 'You are the best!', username: 'samtuck'},
    {thoughtText: 'Amazing', username: 'lilytuck'},
    {thoughtText: 'wow I really hate it', username: 'robtuck'},
    {thoughtText: 'congrats!!@#DFEWQ', username: 'archietuck'},
])



module.exports = Thought


