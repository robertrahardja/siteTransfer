;
let kwOne = {
    keywordName: 'test',
    contentCount: 1,
    contentProv: 0,
    contentVer: 1,
    contentSentToTarget: 0
};
let list = [];
list.push(kwOne);
var indexOfTest = list.findIndex(i => i.keywordName === 'test');
let myObj = list.find(obj => obj.keywordName === 'test');
console.log(myObj);
//# sourceMappingURL=index.js.map