'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {router, controller, jwt} = app;
  router.get('/', controller.home.index);
  router.get('/api/user/showAll', controller.user.show);
  router.post('/api/user/create', controller.user.create);
  router.delete('/api/user/:id', controller.user.remove);
  router.patch('/api/user/update', controller.user.update);
  router.post('/auth/jwt/login', controller.userAccess.login);
  router.post('/auth/jwt/logout', controller.userAccess.logout);
  // 不使用正则, 需要验证的路由加入 jwt
  router.get('/auth/jwt/show', jwt, controller.userAccess.showUser);
  router.post('/auth/upload/single', jwt, controller.upload.upload);
};
