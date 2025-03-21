//for loop

// for(let i = 0; i < 3; i = i + 1){
// console.log(i)
// };

// for(let i = 0; i < 30; console.log(i = i + 5));

// let sum = 0;
// for (let i = 0; i <= 100; sum = sum + i, i++); 
// console.log(sum);



console.log(Math.floor(Math.random()*10));

let OTP = '';
for(let i = 0; i <4; OTP = OTP + Math.floor(Math.random() *10), i ++);
console.log(OTP);
