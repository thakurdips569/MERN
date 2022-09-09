// let a= 10;
// let arr = [23,43,21,4,5];
// let stu = {name: 'raju' , age: 4, rll: 4324 };

// console.log(stu);
// console.log(stu.name);


// stu.add = 'banglre';
// stu.age = 30;
// console.log(stu);

// const prduct = {
//     name : 'laptp',
//     price : 4000,
//     clrs : ['black', 'white', 'red', 'blue'],

// }
// console.log(prduct);
// console.log(prduct.clrs[1]);

const rders = [
    { id: 1456 , prduct : 'laptp', price : 4000},
    { id: 1454 , prduct : 'mbile', price : 3980},
    { id: 14564 , prduct : 'parcel', price : 3990},
]
//    let sum = 0;
//    for(let temp of rders){
//     sum+=temp.price;
//    }console.log(sum);
   
prices = rders.map( ord => ord.price)
console.log(prices);
const sum = prices.reduce( (p1,p2) => { return p1+p2 } )
console.log(sum);



// let sum = 0;
// for (let i =0; i<rders.length; i++){
//     sum = sum + rders[i].price;
// }
// console.log(sum);





// console.log(rders[1].prduct);

// const brand = 'samsung';
// const price = 4844;
// const model = 'note 9';
// const rating = 5.7;
 
// const mobile = {brand, price, model,rating};
// console.log(mobile);

// console.log(Object.keys(mobile));
// console.log(Object.values(mobile));
// console.log(Object.entries(mobile));


