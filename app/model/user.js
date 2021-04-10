'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
      mobile: {type: String, unique: true, required: true},
      password: {type: String, required: true},
      realName: {type: String, required: true},
      avatar: {type: String, default: 'https://i.pinimg.com/564x/ce/10/81/ce10818cef2696f7445bd0673c51d1ba.jpg'},
      extra: {type: mongoose.Schema.Types.Mixed},
      createdAt: {type: Date, default: Date.now},
  });
  return mongoose.model('User', UserSchema);
};
