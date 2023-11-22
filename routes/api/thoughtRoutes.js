const router = require('express').Router();
const {
    getThoughts, 
    getThought,
    newThought,
    deleteThought,
    updateThought
} = require('../../controllers/thoughtControllers')

router.route('/').get(getThoughts).post(newThought);

router.route('/:_id').get(getThought).delete(deleteThought).put(updateThought);

module.exports = router;