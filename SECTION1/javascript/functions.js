function addnums(a,b){
    console.log(a,b);
    var c =  a+b;
    console.log(c);
}
// if parameter are not passed then value should be not define
addnums(34,54);
// console.log(c);

const prodnums = function(x,y){
    console.log(x*y);
    return x*y;
}

const res = prodnums(36,63);
console.log(res);


const sumprd = (a,b) => {
    const sum = a+b;
    const prd = a*b;
    return [sum,prd];
}

const [s,p] = sumprd(234,543);
console.log(s,p);

