const accountId = 2345
let accountEmail = "rashmi@google.com"
var accountPassword = "1234"         
accountCity ="Gurgaon"
let accountState;          //undefined 

// accountId = 12345           // not allowed

accountEmail = "pandey.com"     //allowed
accountPasword = "24565"        //not allowed
accountCity = "Noida"           //allowed


console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

//Prefer not to use var because of issue in block scope and functional scope
