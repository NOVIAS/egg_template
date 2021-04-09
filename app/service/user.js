'use strict';
const { Service } = require('egg');

class UserService extends Service {
  /**
   * @Description 用于创建用户
   * @param payload
   * @return {Promise<any>}
   */
  async create(payload) {
    const {ctx} = this;
    const user = await ctx.model.User.findOne({mobile: payload.mobile});
    if (user) return {code: 10003, msg: '用户已经存在'};
    payload.password = await ctx.genHash(payload.password);
    return ctx.model.User.create(payload);
  }

  /**
   * @Description 用于删除用户
   * @param _id 用户id
   * @return {Promise<any>}
   */
  async remove(_id) {
    const {ctx} = this;
    const user = await ctx.service.user.find(_id);
    if (!user) {
      return {code: 10004, msg: '用户不存在'};
    }
    if (await ctx.model.User.findByIdAndDelete(_id)) return {code: 10000, msg: '操作成功'};
    return ctx.throw({code: 10001, msg: '操作失败'});
  }

  /**
   * @Description 用于更新用户信息
   * @param _id 用户id
   * @param payload 用户需要更新信息
   * @return {Promise<any>}
   */
  async update(payload) {
    const {ctx} = this;
    const user = await ctx.service.user.find(payload._id);
    if (!user) return {code: 10004, msg: '用户不存在'};
    // 对新密码进行加密
    payload.password = await ctx.genHash(payload.password);
    if (await ctx.model.User.findByIdAndUpdate(payload._id, payload)) return {code: 10000, msg: '操作成功'};
    return ctx.throw({code: 10001, msg: '操作失败'});
  }

  /**
   * @Description 用于查询全体用户信息
   * @param _id 查询某个用户
   * @return {Promise<any>}
   */
  async showAll() {
    const {ctx} = this;
    return ctx.model.User.find()
        .populate('role');
  }

  /**
   * @Description 查询单个用户
   * @param _id 查询用户的Id
   * @return {Promise<void>}
   */
  async find(_id) {
    const {ctx} = this;
    const user = await ctx.model.User.findOne({_id});
    return user;
  }
}

module.exports = UserService;
