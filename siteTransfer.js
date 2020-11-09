const kw1 = {
    contentCount: 0,
    contentProv: 0,
    contentVer: 0,
    contentSentToTarget: 0,
    }

//Get data
const fetch = require(‘node-fetch’);
let url = “https://www.reddit.com/r/popular.json”;
let settings = { method: “Get” };
const json = await fetch(url, settings)
.then(res => res.json())



//put data in key value pairs according to keyword
let avKw = {
let proKw = {
let verKw = {
let sentTargetSite = {
let kw = [] //keyword list


//for each kw
//if keyword exists in json
if(!avkw[keyword]){ //check if keyword exists
avKw[‘keyword’] =1
else
avKw[‘keyword’]++
//total count for keyword in available would be avkw[‘keyword’]}}}}