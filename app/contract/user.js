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
    }
  }
};
