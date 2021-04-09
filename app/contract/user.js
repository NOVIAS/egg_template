'use strict';
module.exports = {
  createUserRequest: {
    mobile: {
      type: 'string',
      required: true,
      description: '用户电话',
      example: '17565482158',
      format: /^1[34578]\d{9}$/,
    },
    password: {
      type: 'string',
      required: true,
      description: '用户密码',
      example: '1111111',
    },
    realName: {
      type: 'string',
      required: true,
      description: '用户密码',
      example: 'Novias',
    },
  },
  updateUserRequest: {
    _id: {
      type: 'string',
      required: true,
      description: '用户id',
      example: '60709bef35665b39282cc9de',
    },
    mobile: {
      type: 'string',
      required: false,
      description: '用户电话',
      example: '17565482158',
      format: /^1[34578]\d{9}$/,
    },
    password: {
      type: 'string',
      required: false,
      description: '用户密码',
      example: '1111111',
    },
    realName: {
      type: 'string',
      required: false,
      description: '用户密码',
      example: 'Novias',
    },
  },
};
