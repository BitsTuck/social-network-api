const { User } = require('../models')

module.exports = {
  async getUsers (req, res) {
        try {
            const users = await User.find()

            res.json(users);
        } catch (err) {
            console.log(err)
            return res.status(500).json(err);
        }
        },

     async getUser (req, res) {
        try {
            const user = await User.findOne({ _id: req.params.username})

            if(!user) {
                return res.status(404).json({ message: 'No user with that username' })
            }

            res.json(user)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async createUser (req, res) {
        try {
            const newUser = await User.create(req.body);
            res.json(newUser)
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteUser (req, res) {
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
    },

    async updateUser (req, res) {
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
    }

//Need friend functionality (add/remove by friend ID)
}
