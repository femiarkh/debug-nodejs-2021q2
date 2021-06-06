const router = require('express').Router();
const gamecontroller = require('../controllers/gamecontroller');

router.get('/all', gamecontroller.getAllGames);

router.get('/:id', gamecontroller.getOneGame);

router.post('/create', gamecontroller.createGame);

router.put('/update/:id', gamecontroller.updateGame);

router.delete('/remove/:id', gamecontroller.deleteGame);

module.exports = router;
