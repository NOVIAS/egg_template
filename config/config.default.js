/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1617818416283_6879';

  // add your middleware config here
  config.middleware = [ 'errorHandler' ];

  // router /swagger-ui.html
  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: '测试文档',
      description: '用于测试 swagger',
      version: '1.0.0',
    },
    schemes: [ 'http', 'https' ],
    consumes: [ 'application/json' ],
    produces: [ 'application/json' ],
    enableSecurity: false,
    // 暂不支持
    // enableValidate: true
    // 自动通过文档定义生成 router
    routeMap: true,
    enable: true,
  };

  // config.mongoose = {
  //   url: 'mongodb://novias@192.168.244.128:27017/egg_simple',
  //   options: {
  //     autoReconnect: true,
  //     reconnectTries: Number.MAX_VALUE,
  //     bufferMaxEntries: 0,
  //     // mongoose 验证
  //     auth: { authSource: 'admin' },
  //     user: 'novias',
  //     pass: '123456',
  //   },
  // };

  config.jwt = {
    secret: 'Gernerate_M',
    enabled: true,
    // 对匹配到的正则请求进行鉴权
    // match: ,
  };

  config.cors = {
    // {string|Function} origin: '*',
    // {string|Array} allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    // 允许所有跨域访问, 注释掉则允许下面的白名单访问
    // origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    // 允许携带 cookie
    credentials: true,
  };

  config.security = {
    csrf: {
      // 前后端分离，post请求不方便携带 csrf
      enabled: false,
      ignoreJSON: true,
    },
    // 允许跨域的白名单
    domainWhiteList: [ 'http://localhost:63342' ],
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
