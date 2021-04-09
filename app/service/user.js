const { Service } = require('egg');

class UserService extends Service {
  /**
   * @Description 用于创建用户
   * @param payload
   * @returns {Promise<any>}
   */
  async create(payload) {
    const { ctx } = this;
    payload.password = await this.ctx.genHash(payload.password);
    return ctx.model.User.create(payload);
  }

  /**
   *
   * @param _id 用户id
   * @returns {Promise<Query<any | null, any, {}>>}
   */
  async remove(_id) {
    const { ctx } = this;
    const user = await ctx.server.user.find(_id);
    if (!user) ctx.throw(404, '用户不存在');
    return ctx.model.User.findByIdAndDelete(_id);
  }

  /**
   *
   * @param _id 用户id
   * @param payload 用户需要更新信息
   * @returns {Promise<void>}
   */
  async update(_id, payload) {
    const { ctx } = this;
    const user = await ctx.server.user.find(_id);
    if (!user) ctx.throw(404, '用户不存在');
    return ctx.model.User.findByIdAndUpdate(_id, payload);
  }

  /**
   *
   * @param _id 查询某个用户
   * @returns {Promise<Query<any | null, any, {}>>}
   */
  async show(_id) {
    const { ctx } = this;
    const user = await ctx.server.user.find(_id);
    if (!user) ctx.throw(404, '用户不存在');
    return ctx.model.User.findById(_id)
      .populate('role');
  }
}

module.exports = UserService;
