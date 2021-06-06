const express = require('express');
const app = express();
const db = require('./db');
const user = require('./routes/userroutes');
const game = require('./routes/gameroutes');

db.sync();
app.use(express.json());
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'));
app.use('/api/game', game);
app.listen(process.env.PORT, () => {
  console.log(`App is listening on ${process.env.PORT}`);
});
