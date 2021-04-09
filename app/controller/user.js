const { Controller } = require('egg');


/**
 * 添加 Controller 让 swagger 进行扫面
 * @Controller 用户创建
 */
class UserController extends Controller {
  constructor(ctx) {
    super(ctx);
  }

  /**
   * @Summary createUser
   * @Description create a user
   * @Router post /api/user
   * @Request body createUserRequest *body
   * @Response 200 baseResponse create success
   */
  async create() {
    const { ctx, service } = this;

    // 进行接口验证
    ctx.validate(ctx.rule.createUserRequest);

    // 组装 payload
    const payload = ctx.request.body || {};

    const data = await service.user.create(payload);
    // 设置响应
    ctx.helper.success({ ctx, data });
  }

  /**
   * @Summary removeUser
   * @Description remove a user
   * @Router delete /api/user/{id}
   * @Request path string *id eg: 1 用户 ID
   * @Response 200 baseResponse 删除成功
   */
  async remove() {
    const { ctx, service } = this;
    const { id } = ctx.params;
    // 调用 service
    await service.user.remove(id);
    // 设置响应内容和状态码
    ctx.helper.success({ ctx });
  }
}

module.exports = UserController;
