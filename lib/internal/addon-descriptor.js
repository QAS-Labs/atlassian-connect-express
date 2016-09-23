var utils = require('./utils');
var Handlebars = require('handlebars');

module.exports = function (addon) {
    // var firstPass = utils.replaceTokensInJson(utils.loadJSON('atlassian-connect.json'), '{{localBaseUrl}}', addon.config.localBaseUrl());
    // var secondPass = utils.replaceTokensInJson(firstPass, '{{environment}}', addon.config.environment());

    // var finalResult = secondPass;
    // if (typeof addon.config.descriptorTransformer === "function") {
    //     finalResult = addon.config.descriptorTransformer()(secondPass, addon.config);
    // }
    // return finalResult;

    var template = Handlebars.compile(JSON.stringify(utils.loadJSON('atlassian-connect.json')));
    return JSON.parse(template({
        localBaseUrl: addon.config.localBaseUrl(),
        environment: addon.config.environment(),
        consumerKey: addon.config.consumerKey()
    }));
};
