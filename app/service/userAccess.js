const { Service } = require('egg');

class UserAccessService extends Service {
  async login(payload) {
    const { ctx, service } = this;
    const user = await service.user.findByMobile(payload.mobile);
    // 对 密码进行 hash 后进行比较
    let verifyPsw = await ctx.compare(payload.password, user.password);
    if (!verifyPsw) ctx.throw(404, '用户密码错误');
    return { token: await service.accessToken.apply(user._id) };
  }

  async logout() {
  }

  // 获取当前用户
  async current() {
    const { ctx, service } = this;
    // ctx.state.user 可以提取到 JWT 编码的 data
    const _id = ctx.state.user.data._id;
    const user = await service.user.find(_id);
    return user;
  }
}

module.exports = UserAccessService;

