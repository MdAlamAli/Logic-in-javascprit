const accountId=12345
let accountEmail="abc@gmail.com"
var accountPassword="1234"
accountCity="Patna"
accountState=

console.log(accountId)

/*
 perfer not to use var
 because issuse is block scope and functional scope.
*/

accountEmail="aaa@gmail.com"
accountPassword="09876"
accountCity="Delhi"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);