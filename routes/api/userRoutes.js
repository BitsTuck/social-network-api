const router = require('express').Router();

const{
    getUsers, 
    getUser,
    createUser,
    deleteUser,
    updateUser
} = require ('../../controllers/userControllers')

router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getUser).delete(deleteUser).put(updateUser)  

module.exports = router;