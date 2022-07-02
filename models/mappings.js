
const deputy = {
    nom: 'fullName',
    nom_de_famille: 'lastName',
    prenom: 'firstName',
    sexe: 'gender',
    date_naissance: 'bornOn',
    lieu_naissance: 'birthPlace',
    num_deptmt: 'departmentNumber',
    nom_circo: 'districtName',
    num_circo: 'districtNumber',
    mandat_debut: 'termStartedAt',
    groupe_sigle: 'organizationAcronym',
    parti_ratt_financier: 'organizationName',
    sites_web: 'websites',
    site: 'url',
    emails: 'emailAddresses',
    email: 'emailAddress',
    adresses: 'postalAddresses',
    adresse: 'fullAddress',
    collaborateurs: 'staffMembers',
    collaborateur: 'name',
    autres_mandats: 'previousTerms',
    anciens_autres_mandats: 'otherPreviousTerms',
    anciens_mandats: 'previousTerms',
    term: 'term',
    profession: 'occupation',
    place_en_hemicycle: 'nationalAssemblySeat',
    url_an: 'nationalAssemblyUrl',
    id_an: 'nationalAssemblyId',
    url_nosdeputes: 'nosDeputesUrl',
    url_nosdeputes_api: 'nosDeputesApiUrl',
    nb_mandats: 'termsCount',
    twitter: 'twitter',
}

const organization = {
    slug: 'slug',
    nom: 'name',
    acronyme: 'acronym',
    groupe_actuel: 'active',
    couleur: 'color',
    order: 'order',
    type: 'type',
    url_nosdeputes: 'nosDeputesUrl',
    url_nosdeputes_api: 'nosDeputesApiUrl'
}

module.exports = { deputy, organization }

