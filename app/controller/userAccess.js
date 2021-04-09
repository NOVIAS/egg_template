const { Controller } = require('egg');

/**
 * @Controller 用户鉴权
 */

class UserAccessController extends Controller {
  constructor(ctx) {
    super(ctx);
  }

  /**
   * @summary 用户登录
   * @description 用户登入
   * @router post /auth/jwt/login
   * @request body loginRequest *body
   * @response 200 baseResponse 登录成功
   */
  async login() {
    const { ctx, service } = this;
    // 参数校验
    ctx.validate(ctx.rule.loginRequest);
    const payload = ctx.request.body || {};
    const data = await service.userAccess.login(payload);
    ctx.helper.success({ ctx, data });
  }

  /**
   * @summary 用户登出
   * @description 用户登出
   * @router post /auth/jwt/logout
   * @request body loginRequest *body
   * @response 200 baseResponse 登出成功
   */
  async logout() {
    const { ctx, service } = this;
    await service.userAccess.logout();
    ctx.helper.success({ ctx });
  }
}

module.exports = UserAccessController;
