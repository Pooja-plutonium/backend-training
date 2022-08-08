const printDate = function(){
    let currentDate = new Date()
    currentDate = currentDate.getDate()
    console.log(currentDate);
}
const printMonth = function(){
    let currentMonth = new Date()
    currentMonth = currentMonth.getMonth;
    currentMonth = currentMonth + 1
    console.log("The current month is :"+ currentMonth );
}
let getBatchInfo = function(){
console.log("Plutonium , w4D1 , the today's topic is Nodejs")
};


module.exports.getBatchInfo= getBatchInfo;
module.exports.printDate   = printDate;
module.exports.printMonth  = printMonth;
