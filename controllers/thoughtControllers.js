const {Thought, User} = require('../models')

module.exports = {

   async getThoughts (req, res) {
        try {
            const thoughts = await Thought.find();

            res.json(thoughts);
        } catch (err) {
            console.log(err)
            return res.status(500).json(err);
        }
        },

    async getThought (req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params._id})

            if(!thought) {
                return res.status(404).json({ message: 'There is no thought with this id' })
            }

            res.json(thought)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async newThought (req, res) {
        try {
            const newThought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                {_id: req.body._id},
                {$addToSet: {thoughts: newThought._id}},
                {new: true}
            )

            if(!user) {
                return res.status(404).json({
                    message: 'Your thought was not created. No such user with this id.'
                })
            }
            res.json(newThought)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },

    async deleteThought (req, res) {
        try {
            const deleteThought = await Thought.findOneAndDelete({ _id: req.params._id});

            if(!deleteThought) {
                return res.status(404).json({ message: "No such thought with this id. Cannot delete." })
            }

            res.json({ message: "Thought deleted" })

        } catch(err) {
            console.log(err);
            res.status(500).json(err)
        }
    },

    async updateThought (req, res) {
        try {
            const updateThought = await Thought.findOneAndUpdate(
                {_id: req.params._id},
                {$set: req.body},
                {runValidators: true, new: true}
                );

            if(! updateThought) {
                return res.status(404).json({ message: "No such thought with this id. No update made."})
            }

            res.json({message: "Thought updated"})
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },

//CHECK ALL REACTIONS

async addReaction(req, res) {
    try {
        const thoughts = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$addToSet: {reactions: req.body }},
            {runValidators: true, new: true}
        );

        if(!thoughts) {
            return res.status(404).json({message: 'No thought with this id'});
        }

        res.json(thoughts)
    } catch (err) {
        res.status(500).json(err)
    }
},

async deleteReaction(req, res) {
    try {
        const thoughts = await Thought.findOneAndDelete(
            {_id: req.params.thoughtId},
            {$pull: { reactions: {reactionsId: req.params.reactionsId}}},
            {runValidators: true, new: true}
        );

        if(!thoughts) {
            return res.status(404).json({message: 'No thought with this id'});
        }

        res.json(thoughts)
    } catch (err) {
        res.status(500).json(err)
    }
},

}