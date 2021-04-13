'use strict';
/**
 * 接口错误异常处理
 */
module.exports = (options, app) => {
  return async function(ctx, next) {
    try {
      await next();
    } catch (err) {
      // 异常触发, 向上抛出异常
      app.emit('error', err, this);
      // 异常处理
      const status = err.status || 500;
      // 判断是否生产环境
      const error = status === 500 && app.config.env === 'prod' ? 'Internal Server Error' : err.message;
      ctx.body = {
        code: status,
        error,
      };
      // 用户自定义错误
      if (status === 422) {
        // 这里注意是 errors
        ctx.body.detail = err.errors;
      }
      ctx.status = 200;
    }
  };
};
