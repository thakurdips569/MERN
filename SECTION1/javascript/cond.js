let a=prompt("hey what is your age");
a=number.parseInt(a)     // converting in integer
if(a>0){
     alert("this is valid age")
}
else{
    alert("this is invalid age")
}

//switch statement
const i=3;
switch(i){
    case 1:
        console.log("this is correct");
    case 2:
        console.log("this is  incorrect");   break;
        default:
            console.log("nothing is here");    
}

//ternary operator
console.log("you can",(a<18? "not drive":"drive"));
