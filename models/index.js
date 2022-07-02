const { serializeDeputy, serializeOrganization, addRelatedOrganization } = require('./serializers.js')

const { deputies } = require('../db/nosdeputes.fr_deputes_en_mandat_2022-06-27.json')
const { organizations } = require('../db/nosdeputes.fr_organismes2022-06-28.json')

module.exports = {
    deputies: serializeDeputy(deputies),
    organizations: serializeOrganization(organizations)
}
