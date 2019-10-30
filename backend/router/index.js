const router = require('express').Router()
const SongController = require('../controllers/Song')


router.post('/song-add', SongController.song_add)
router.get('/:id', SongController.song_detail)
router.get('/song-is-exists/:id', SongController.song_is_exists)
router.delete('/song-delete/:id', SongController.song_delete)


module.exports = router