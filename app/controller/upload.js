const fs = require('fs');
const path = require('path');
const { Controller } = require('egg');
const { awaitWriteStream } = require('await-stream-ready');
const sendToWormhole = require('stream-wormhole');
const download = require('image-downloader');

/**
 * @Controller 上传文件
 */
class UploadController extends Controller {
  constructor(ctx) {
    super(ctx);
  }

  /**
   * @summary 上传单个文件
   * @description 上传单个文件
   * @router post /auth/upload/single
   */
  async upload() {
    const { ctx } = this;
    // 要通过 ctx.getFileStream 便捷的获取到用户上传的文件
    // 只支持一个文件上传
    // 上传文件必须在其他的 fields 后面, 否则在拿到文件流时可能还获取不到
    const stream = await ctx.getFileStream();
    // 所有表单字段都可以通过 stream.fields 获取
    const fileName = path.basename(stream.filename);
    const extname = path.extname(stream.filename)
      .toLowerCase();
    const uuid = (Math.random() * 999999).toFixed();

    // 组装 stream
    const target = path.join(this.config.baseDir, 'app/public/upload', `${uuid}${extname}`);
    const writeStream = fs.createWriteStream(target);
    // 文件上传处理, 这里可以进行自定义处理
    // 这里是精华部分
    try {
      // 使用 await 来处理异步
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
      // 必须将文件流消费掉,否则导致浏览器响应卡死
      await sendToWormhole(stream);
      throw err;
    }
    // 调用 Service 进行业务处理
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx });
  }
}

module.exports = UploadController;

