"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
let goddessName = {
    firstName: "邱",
    lastName: "淑贞"
};
console.log(goddessName.firstName);
console.log(goddessName.lastName);
function say({ firstName, lastName }) {
    console.log(`我的女神是: ${firstName}_${lastName}`);
}
say(goddessName);
