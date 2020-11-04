const app = require('./index');
const sequelize = require('./database');

const port = process.env.PORT;

app.listen(port);

sequelize
  .authenticate()
  .then(() => {
    console.log('Successfully connected to DB.... :)!!');
  })
  .catch(() => {
    console.log('There was an error while trying to connecting...');
  });
