const Sequelize = require('sequalize');
const sequalize = new Sequelize('node-complete', 'root', '1111', {
    dialect: 'mysql', 
    host: 'localhost'
});

modules.exports = sequalize;