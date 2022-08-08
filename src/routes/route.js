const express = require('express');
const underScore = require('underscore');
const lodash = require('lodash');
// const abc = require('../introduction/intro')
// const well = require('../logger/logger.js')
// const info = require('../util/helper.js')
// const formatterModule= require('../validator/formatter.js')
const router = express.Router();

//router.get('/test-me', function(req,res){
    //info.problem2()
  //  res.send('problem2 of given assignment has solved')
//});

router.get('/test-me', function (req, res) {
    //console.log('My batch is', abc.name)
    // abc.printName()
    // well.problem()
    // formatterModule.changetoLowerCase()
    // formatterModule.changetoUpperCase()
    // formatterModule.trim()
    // info.printDate()
    // info.printMonth()
    // info.getBatchInfo()
    const months = ['January','Febuary','March','April','May','June','July','August','September','October','November','Decemeber'];
    const result = lodash.chunk(months , 3)
     console.log(result) ;   
     const oddNumbers = [1,3,5,7,9,11,13,15,17,19];
     const outOdd = lodash.tail(oddNumbers);
     console.log(outOdd);
     const a = [5,8,6,9,5];
     const b = [4,5,6,7,8];
     const c = [5,6,8,4,2];
     const d =  [9,5,4,2,3];
     const e =  [2,5,6,8,4];
     const union = lodash.union(a,b,c,d,e);
     console.log(union);
     const p = ["horror","The Shining"];
     const q = ["drama","Titanic"];
     const r = ["thriller","Shutter Island"];
     const s = ["fantasy","Pans Labyrinth"];
     const pair = lodash.fromPairs([p,q,r,s]);
     console.log (pair);

res.send('My second ever api!')

});


//router.get('/test-you', function(req, res){
  //  res.send('This is the second routes implementation')
//})

//router.get('/give-me-students-data',function(req, res){

//})
module.exports = router;
// adding this comment for no reason