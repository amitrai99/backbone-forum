/**
 * This file is for storing the configuration values for the application
 * @return {Object} returns config object
 */
define(['utils/auth'], function(auth) {
  /**
   * configuration object
   * @type {Object}
   */
  var conf = {};
  //var apiBase = 'http://localhost:3000';
  var apiBase = 'http://localhost:3000';

  /**
   * api configuration obect
   * @type {Object}
   */
  var apis = {
    question: apiBase + '/posts',
    like: apiBase + '/likes'
  };

  conf.apis = apis;
  conf.auth = auth;

  return conf;
});
