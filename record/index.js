const db  = require('./Datasource.js');
const path = require('path');
const datasource = db.create(path.join(__dirname,"../data/data.db"));
const configsource = db.create(path.join(__dirname,"../data/config.db"));

module.exports = {datasource, configsource};
