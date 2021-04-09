'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {router, controller} = app;
  router.get('/', controller.home.index);
  router.get('/api/user/showAll', controller.user.show);
  router.post('/api/user/create', controller.user.create);
  router.delete('/api/user/:id', controller.user.remove);
  router.patch('/api/user/update', controller.user.update);
};
