const router = require('express').Router();
const {Thought} = require('../../models')

// /api/thoughts

    router.get('/', async (req, res) => {
        try {
            const thoughts = await Thought.find();

            const thoughtObj = {
                username, 
                email, 
                thoughts, 
                friends
            };

            res.json(thoughtObj);
        } catch (err) {
            console.log(err)
            return res.status(500).json(err);
        }
        }),

    router.get('/:id', async (req, res) => {
        try {
            const thought = await Thought.findOne({ _id: req.params._id})

            if(!thought) {
                return res.status(404).json({ message: 'There is no thought with this id' })
            }

            res.json({
                thoughtText, 
                username, 
                createdAt
            })
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    }),

    router.put ('/:id', async (req, res) => {
        try {
            const newThought = await Thought.create(req.body);
            res.json(newThought)
        } catch (err) {
            res.status(500).json(err);
        }
    }),

    router.delete('/:id', async (req, res) => {
        try {
            const deleteThought = await Thought.findOneAndRemove({ _id: req.params._id});

            if(!deleteThought) {
                return res.status(404).json({ message: "No such thought with this id. Cannot delete." })
            }

            res.json({ message: "Thought deleted" })
        } catch(err) {
            console.log(err);
            res.status(500).json(err)
        }
    }),

    router.put('/:id', async (req, res) => {
        try {
            const updateThought = await Thought.findOneAndUpdate({_id: req.params._id});

            if(! updateThought) {
                return res.status(404).json({ message: "No such thought with this id. No update made."})
            }

            res.json({message: "Thought updated"})
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    })

//Need thought reaction functionality (add/remove by reaction ID)

module.exports = router;