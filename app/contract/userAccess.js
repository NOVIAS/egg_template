'use strict';
module.exports = {
  loginRequest: {
    mobile: {
      type: 'string',
      required: true,
      description: '用户手机号',
      example: '17598653585',
      format: /^1[34578]\d{9}$/
    },
    password: {type: 'string', required: true, description: '用户密码', example: '111111'}
  }
};
