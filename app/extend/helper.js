'use strict';
const moment = require('moment');

// 格式化时间
exports.formatTime = time => moment(time)
    .format('YYYY-MM-DD HH:mm:ss');

// 统一处理成功响应
exports.success = ({ ctx, data = null, msg = '请求成功' }) => {
  ctx.body = {
    code: 200,
    data,
    msg,
  };
  ctx.status = 200;
};

