const router = require('express').Router();

const{
    getUsers, 
    getUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    deleteFriend
} = require ('../../controllers/userControllers')

router.route('/').get(getUsers).post(createUser);

router.route('/:_id').get(getUser).delete(deleteUser).put(updateUser)

router.route('/:_id/friends/:friendId').put(addFriend).delete(deleteFriend)

module.exports = router;