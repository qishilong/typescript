import fs from "fs";    // 不配置 "esModuleInterop": true, 会报错
fs.readFile('./myModule.ts', (e) => console.log(e));