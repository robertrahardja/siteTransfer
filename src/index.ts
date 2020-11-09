interface keywordDetail {
    keywordName: string,
    contentCount: number,
    contentProv: number,
    contentVer: number,
    contentSentToTarget: number
};

let kwOne: keywordDetail = { 
    keywordName: 'test',
    contentCount: 1,
    contentProv: 0,
    contentVer: 1,
    contentSentToTarget: 0};


 let kwTwo: keywordDetail = { 
        keywordName: 'notTest',
        contentCount: 1,
        contentProv: 0,
        contentVer: 1,
        contentSentToTarget: 0};

//list: array with keys equals to objects' keywordName
let list: Array<keywordDetail> = []

list.push(kwOne)

//finding index of keyword
var indexOfTest = list.findIndex(i => i.keywordName === 'test');

// To find a specific object in an array of objects
let myObj = list.find(obj => obj.keywordName === 'test');

// console.log(list[0].keywordName)
console.log(myObj)