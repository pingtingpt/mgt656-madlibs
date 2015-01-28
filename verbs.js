var lodash = require('lodash');

var verbs = [
    'run',
    'jump',
    'code',
    'eat',
    'sleep',
    'laugh',
];

module.exports = {};
module.exports.get = function(){
    return lodash.sample(verbs);
};