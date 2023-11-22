const router = require('express').Router();
const {
    getThoughts, 
    getThought,
    newThought,
    deleteThought,
    updateThought, 
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtControllers')

router.route('/').get(getThoughts).post(newThought);

router.route('/:_id').get(getThought).delete(deleteThought).put(updateThought);

router.route('/:_id/reactions').put(addReaction).delete(deleteReaction)


module.exports = router;