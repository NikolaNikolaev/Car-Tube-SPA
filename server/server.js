const express = require('express');
const { PORT } = require('./config/config');
const { connectToDb } = require('./services/mongodb/mongodb');
const routes = require('./routes');

const app = express();

require('./config/express')(app);
connectToDb();

app.use(routes);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));