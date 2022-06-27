var rename = require('deep-rename-keys');
const { deputy } = require('./dto-keys-mappings.js');

const renameDeputyKeys = (resource) => rename(resource, (key) => deputy[key]);

module.exports = { renameDeputyKeys }

