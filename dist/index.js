"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
let kwOne = {
    keywordName: 'test',
    contentCount: 1,
    contentProv: 0,
    contentVer: 1,
    contentSentToTarget: 0
};
let kwTwo = {
    keywordName: 'notTest',
    contentCount: 1,
    contentProv: 0,
    contentVer: 1,
    contentSentToTarget: 0
};
let list = [];
list.push(kwOne);
list.push(kwTwo);
let myObj = list.find(obj => obj.keywordName === 'test');
function testingFunction() {
    return list[0].contentProv;
}
module.exports = testingFunction;
//# sourceMappingURL=index.js.map