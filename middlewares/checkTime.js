function checkTime(req,res, next){
const currDate = new Date ().toLocaleString();
const currHour = new Date(). getHours();

// if (currHour >= 9 && currHour <= 14){
//     return res.send('sei a lezione del corso BOOLEAN')
// }

console.log('orario corrente:'+ ' ' + currDate);

next();
}

module.exports = checkTime;