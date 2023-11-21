const router = require('express').Router()
const {User} = require('../../models')

// /api/users
   router.get('/', async (req, res) => {
        try {
            const users = await User.find();

            const userObj = {
                username, 
                email, 
                thoughts, 
                friends
            };

            res.json(userObj);
        } catch (err) {
            console.log(err)
            return res.status(500).json(err);
        }
        }),

    router.get('/:id', async (req, res) => {
        try {
            const user = await User.findOne({ _id: req.params.username})

            if(!user) {
                return res.status(404).json({ message: 'No user with that username' })
            }

            res.json({
                username, 
                thoughts, 
                friends
            })
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    }),

    router.post ('/', async (req, res) => {
        try {
            const newUser = await User.create(req.body);
            res.json(newUser)
        } catch (err) {
            res.status(500).json(err);
        }
    }),

    router.delete('/:id', async (req, res) => {
        try {
            const deleteUser = await User.findOneAndRemove({ _id: req.params.username});

            if(!deleteUser) {
                return res.status(404).json({ message: "No such username. Cannot delete." })
            }

            res.json({ message: "User deleted" })
        } catch(err) {
            console.log(err);
            res.status(500).json(err)
        }
    }),

    router.put ('/:id', async (req, res) => {
        try {
            const updateUser = await User.findOneAndUpdate({_id: req.params.username});

            if(! updateUser) {
                return res.status(404).json({ message: "No such user. No update made."})
            }

            res.json({message: "User updated"})
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    })

//Need friend functionality (add/remove by friend ID)

module.exports =  router;