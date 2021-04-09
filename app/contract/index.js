// eslint-disable-next-line strict
module.exports = {
  baseRequest: {
    id: {type: 'string', description: 'id only', required: true, example: '1'},
  },
  baseResponse: {
    code: {
      type: 'integer',
      required: true,
      example: 0,
    },
    data: {
      type: 'string',
      example: 'success',
      errorMessage: {
        type: 'string',
        example: 'failure',
      },
    },
  },
};
