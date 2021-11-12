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

// for(let i=animals.length-1; i>=0; i--){
//     console.log(i, animals[i]);
// }

// for(let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`);
//     for(let j = 1; j < 4; j++) {
//         console.log(`   j is: ${j}`);
//     }
// }

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
];

// for(let i=0; i<seatingChart.length; i++) {
//     console.log(`${i+1} row : `);
//     for(let j=0; j<seatingChart[i].length; j++) {
//         console.log("   " + seatingChart[i][j]);
//     }
// }

for (let i = 0; i < seatingChart.length; i++) {
    let row = seatingChart[i];
    console.log(`ROW #${i + 1}`);
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}