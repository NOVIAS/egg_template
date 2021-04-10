const { Controller } = require('egg');

/**
 * @Controller 用户鉴权
 */

class UserAccessController extends Controller {

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
   * @response 200 baseResponse 登出成功
   */
  async logout() {
    const {ctx, service} = this;
    await service.userAccess.logout();
    ctx.helper.success({ctx});
  }

  /**
   * @summary 查看用户信息
   * @description 查看用户信息
   * @router get /auth/jwt/show
   * @response 200 baseResponse 登出成功
   */
  async showUser() {
    // eslint-disable-next-line no-unused-vars
    const {ctx, service} = this;
    // {
    //   data: { _id: '60708cbac4110905fc980556' },
    //   到期时间
    //   exp: 1618672540,
    //   发布时间
    //   iat: 1618067740
    // }
    // 验证是否过期
    const {data} = ctx.state.user;
    // ctx.state.user 可以提取到 JWT 编码的 data
    const user = await service.userAccess.current(data._id);
    ctx.helper.success({ctx, data: user});
  }
}

module.exports = UserAccessController;
