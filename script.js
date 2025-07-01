const phoneNumber = prompt("enter the phone number you want to learn: ");
let Func = phoneNumber => Number(phoneNumber);
let array = Array.from((phoneNumber), Func);
console.log(array)

for(let i = 0; i < array.length; i++){
    let comparisonArray = new Array(i+1);
    let digit = prompt("enter digit: ");
    let ComparisonFunc = digit => Number(digit);
    comparisonArray = Array.from((digit), ComparisonFunc);
    let comparisonSize = comparisonArray.length;
    
    console.log(comparisonArray);
    console.log(comparisonSize);
    
    if(comparisonSize == (i+1)){
        if(comparisonArray[i] != array[i]){
        console.log("the digits are incorrect");
        break;
        }
        else{
            console.log("the digits are correct");
                    if((i+2) <= 10){
                console.log("enter the first " +(i+2)+ " digits")
            }
        }
    }
    else{
        console.log("correct length");
        break;
    }
}

console.log("you have learned the phone number!");
