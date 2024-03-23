const accountId = 190201;
let accountEmail = "pk8373933541@gmail.com";
var accountPhone = "89022";
accountCity = "Jaipur";

// accountId = 334; // not allowed because we can't change a constant value throughout the program

accountEmail = "hc.hc@gmail.com";
accountPhone = "8287383174";
accountCity = "Delhi";

/* Modern practices of coding avoid using 'var' as container due to the problem of functional scope or block scope */

console.log(accountId);
console.table([accountId, accountEmail, accountPhone, accountCity]);