// ====== I/O INTESIVE TASK =======

const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

// PROGRAM THAT DEALS WITH STACK OF FILES -> I/O BOUND