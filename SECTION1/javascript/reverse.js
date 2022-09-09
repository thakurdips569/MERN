let num = 637474;
let rev =0;
while(num>0){
    let r = num%10;
    rev = rev*10+r;
    num = parseInt(num/10);
}
console.log(rev);