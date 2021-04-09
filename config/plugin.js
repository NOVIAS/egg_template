'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  swaggerdoc: {
    enable: true,
    package: 'egg-swagger-doc-feat'
  },

  validate: {
    enable: true,
    package: 'egg-validate'
  },

  mongoose: {
    enabled: true,
    package: 'egg-mongoose'
  },

  bcrypt: {
    enabled: true,
    package: 'egg-bcrypt'
  },

  jwt: {
    enabled: true,
    package: 'egg-jwt'
  }
};
