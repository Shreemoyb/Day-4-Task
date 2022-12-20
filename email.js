const email = userInput[0];
var length = email.length;
var isEmailValid= true;

if (email.includes('@') && email.includes('.')){
    
const countofAt = email.split("@").length-1;
const countofDot = email.split(".").length-1;
if ( countofAt > 1 || countofDot > 1) {
    isEmailValid = false;
} else if ( !(email.indexOf('.') - email.indexOf('@') >= 4 ) ) {
   isEmailValid = false; 
} else if (email.indexOf('@') - email.indexOf(email[0]) < 3 ) {
   isEmailValid = false; 
} else if ( email[length-1] !=='m' || email[length-2] !=='o' || email[length-3] !=='c' || email[length-4] !=='.') {
    isEmailValid = false;
} 
} else {
    isEmailValid = false;
}
 if ( isEmailValid ) {
     console.log('YES');
} else {
    console.log('NO');
}