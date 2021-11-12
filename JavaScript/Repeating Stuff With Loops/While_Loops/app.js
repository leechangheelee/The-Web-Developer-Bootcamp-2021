// let count = 0;
// while(count < 10) {
//     count++;
//     console.log(count);
// }

const SECRET = "BabyHippo";

let guess = prompt("enter the secret code...");
while(guess !== SECRET) {
    guess = prompt("enter the secret code...");
}
console.log("CONGRATS YOU GOT THE SECRET!!!");