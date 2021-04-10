'use strict';
const { Service } = require('egg');

class UserAccessService extends Service {
    async login(payload) {
        const {ctx, service} = this;
        const user = await service.user.findByMobile(payload.mobile);
        if (!user) ctx.throw(404, '用户不存在');
        // 对 密码进行 hash 后进行比较
        const verifyPsw = await ctx.compare(payload.password, user.password);
        if (!verifyPsw) ctx.throw(404, '用户密码错误');
        return {token: await service.accessToken.apply(user._id)};
    }

    async logout() {
        // 如果对 token 进行了持久化, 这里进行移除逻辑
    }

    // 获取当前用户
    async current(_id) {
        const {service} = this;
        const user = await service.user.find(_id);
        return user;
    }
}

module.exports = UserAccessService;

