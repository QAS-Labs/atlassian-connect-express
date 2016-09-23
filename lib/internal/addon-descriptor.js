var utils = require('./utils');
var Handlebars = require('handlebars');

module.exports = function (addon) {
    var template = Handlebars.compile(JSON.stringify(utils.loadJSON('atlassian-connect.json')));
    return JSON.parse(template({
        localBaseUrl: addon.config.localBaseUrl(),
        environment: addon.config.environment(),
        consumerKey: addon.config.consumerKey()
    }));
};
