'use strict';
const { Service } = require('egg');

class ActionTokenService extends Service {
  /**
   * @description 用于鉴权
   * @param _id 用户 id
   * @returns {Promise<string>}
   */
  async apply(_id) {
    const {ctx} = this;
    return ctx.app.jwt.sign({
      data: {
        _id,
      },
      exp: Math.floor(Date.now() / 1000 + (60 * 60 * 24 * 7)),
    }, ctx.app.config.jwt.secret);
  }
}

module.exports = ActionTokenService;
