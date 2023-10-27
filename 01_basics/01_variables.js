const accountId = 23561
let accountEmail = "ilanos@gmail.com"
var accountPassword = "delulu is solulu"
accountCity = "Pune"
let accountState;

//accountID = 23 ?? Not allowed

accountEmail = "hc@hf.com"
accountPassword = "fifi"
accountCity = "Mumbai"
console.log(accountId)
/* 
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
