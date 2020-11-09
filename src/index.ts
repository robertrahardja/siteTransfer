import {test, result} from './compTest'

interface keywordDetail {
    keywordName: string,
    contentCount: number,
    contentProv: number,
    contentVer: number,
    contentSentToTarget: number
};

let list: Array<keywordDetail> = []


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

list.push(kwOne)
list.push(kwTwo)
//finding index of keyword
// var indexOfTest = list.findIndex(i => i.keywordName === 'test');

// To find a specific object in an array of objects
let myObj = list.find(obj => obj.keywordName === 'test');

// console.log(list[0].keywordName)
// console.log(myObj)

// test()

// console.log(result)

function testingFunction(): number{
    return list[0].contentProv
}

module.exports = testingFunction
