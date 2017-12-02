const db  = require('./record/Datasource.js');

const datesource = db.create("./data/data.db");
const configsource = db.create("./data/config.db");

module.exports = {datesource, configsource};
