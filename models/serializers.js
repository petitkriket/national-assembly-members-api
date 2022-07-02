var rename = require('deep-rename-keys');
const { deputy, organization } = require('./mappings.js');

const serializeDeputy = (resource) => rename(resource, (key) => deputy[key]);
const serializeOrganization = (resource) => rename(resource, (key) => organization[key]);

module.exports = { serializeDeputy, serializeOrganization }
