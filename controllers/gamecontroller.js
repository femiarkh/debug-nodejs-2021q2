const Game = require('../db').import('../models/game');

exports.getAllGames = (req, res) => {
  Game.findAll({ where: { owner_id: req.user.id } }).then(
    (games) => {
      res.status(200).json({
        games: games,
        message: 'Data fetched.',
      });
    },

    () => {
      res.status(500).json({
        message: 'Data not found',
      });
    }
  );
};

exports.getOneGame = (req, res) => {
  Game.findOne({ where: { id: req.params.id, owner_id: req.user.id } })
    .then((game) => {
      res.status(200).json({
        game: game,
      });
    })
    .catch(() => {
      res.status(500).json({
        message: 'Data not found.',
      });
    });
};

exports.createGame = (req, res) => {
  Game.create({
    title: req.body.game.title,
    owner_id: req.user.id,
    studio: req.body.game.studio,
    esrb_rating: req.body.game.esrb_rating,
    user_rating: req.body.game.user_rating,
    have_played: req.body.game.have_played,
  })
    .then((game) => {
      res.status(200).json({
        game: game,
        message: 'Game created.',
      });
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

exports.updateGame = (req, res) => {
  Game.update(
    {
      title: req.body.game.title,
      studio: req.body.game.studio,
      esrb_rating: req.body.game.esrb_rating,
      user_rating: req.body.game.user_rating,
      have_played: req.body.game.have_played,
    },
    {
      where: {
        id: req.params.id,
        owner_id: req.user.id,
      },
      returning: true,
    }
  )
    .then((data) => {
      if (!data[0]) {
        throw Error('Game is not found.');
      }
      res.status(200).json({
        game: data[1],
        message: 'Successfully updated.',
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

exports.deleteGame = (req, res) => {
  Game.destroy({
    where: {
      id: req.params.id,
      owner_id: req.user.id,
    },
  })
    .then((game) => {
      if (!game) {
        throw Error('Game is not found.');
      }
      res.status(200).json({
        game: game,
        message: 'Successfully deleted',
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};
