// const myModule = require('./myModule');   // 这样写无法获得类型推断
// import myModule = require("./myModule");    // 要想使用 commonjs 的方式只能这种写法才能继续获得 ts 的类型推断

import myModule = require("./myModule");
console.log(myModule.name)



