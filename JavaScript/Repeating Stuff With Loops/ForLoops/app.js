// for(let num = 1; num<=10; num+=1){
//     console.log("IM IN THE LOOP BODY!!!");
//     console.log(num);
// }

// for(let i = 1; i <= 20; i+=2) {
//     console.log(i);
// }

// for(let i = 100; i >= 0; i-=10) {
//     console.log(i);
// }

// for(let i = 10; i <= 1000; i *= 10) {
//     console.log(i);
// }

// DO NOT RUN THIS LOOP
// INFINITE LOOP!! BAD!!
// for (let i = 20; i >= 0; i++) {
//     console.log(i);
// }

const animals = [
    "lions",
    "tigers",
    "bears"
];

// for(let i=0; i<animals.length; i++){
//     console.log(i, animals[i]);
// }

for(let i=animals.length-1; i>=0; i--){
    console.log(i, animals[i]);
}