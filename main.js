// console.log(process.argv);
const program = require("commander")

program.parse(process.argv)

const filePath = program.args
console.log(filePath)