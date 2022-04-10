const COLOR = require(`chalk`);
exports.info = (...message) => {
  console.log(COLOR.cyan(`[INFO] > ` + COLOR.yellow(...message)));
};