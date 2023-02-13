Object.defineProperty(exports, "__esModule", { value: true });
const myModule_1 = require("./myModule");
const myModule1_1 = require("./myModule1");
const result = (0, myModule1_1.joint)("a", "b");
const a = (0, myModule_1.default)(1, 2);
console.log(result, a);
