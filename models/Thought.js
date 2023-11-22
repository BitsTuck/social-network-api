const { Schema, model }= require('mongoose');
const reactions = require('./Reactions')


const thoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => {
            if(date) return date.toISOString()
        }
    },
    username: {
        type: String,
        required: true
    },
    reactions: [{
        ref: [reactions]
    }]
});

thoughtSchema
    .virtual('reactionCount')
    .get(function() {
        return this.reactions.length;
    })




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


