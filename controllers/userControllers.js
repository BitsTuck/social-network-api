const { User } = require('../models')

module.exports = {
    async getUsers(req, res) {
        try {
            const users = await User.find()

            res.json(users);
        } catch (err) {
            console.log(err)
            return res.status(500).json(err);
        }
    },

    async getUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params._id })

            if (!user) {
                return res.status(404).json({ message: 'No user with that id' })
            }

            res.json(user)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            res.json(newUser)
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteUser(req, res) {
        try {
            const deleteUser = await User.findOneAndDelete({ _id: req.params._id });

            if (!deleteUser) {
                return res.status(404).json({ message: "No such username. Cannot delete." })
            }

            res.json({ message: "User deleted" })
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },

    async updateUser(req, res) {
        try {
            const updateUser = await User.findOneAndUpdate({ _id: req.params._id },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!updateUser) {
                return res.status(404).json({ message: "No such user. No update made." })
            }

            res.json({ message: "User updated" })
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },


    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params._id },
                { $addToSet: { friends: req.params.friendId } },
                { runValidators: true, new: true }
            );

            const userFriend = await User.findOneAndUpdate(
                { _id: req.params.friendId },
                { $addToSet: { friends: req.params._id } },
                {runValidators: true, new: true}
            )

            if (!user) {
                return res.status(404).json({ message: 'No user with this id' });
            }

            res.json({user, userFriend})

        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndDelete(
                { _id: req.params._id },
                { $pull: { friends: { friendsId: req.params.friendsId } } },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user with this id' });
            }

            res.json(user)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
}
