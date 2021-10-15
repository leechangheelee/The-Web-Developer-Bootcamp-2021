// let random = Math.random();
// if (random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5!!!");
// } else {
//     console.log("YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5!!!");
// }
// console.log(random);

// const dayOfWeek = prompt('ENTER A DAY').toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("UGHHH I HATE MONDAYS!");
// } else if (dayOfWeek === 'saturday') {
//     console.log("YAY I LOVE SATURDAYS!");
// } else if (dayOfWeek === 'friday') {
//     console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!");
// } else {
//     console.log("MEH");
// }

// const age = prompt("Input your age.");

// if (age < 5) {
//     console.log("You are a baby. You get in for free");
// } else if (age < 10) {
//     console.log("You are a child. You pay $10");
// } else if (age < 65) {
//     console.log("You are an adult. You pay $20");
// } else {
//     console.log("You are a senior. You pay $10");
// }

const password = prompt("please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
    // Password cannot include space
    if (password.indexOf(' ') === -1) {
        //console.log("Good job! No space!");
        console.log("Valid Password!");
    } else {
        console.log("Password cannot contain spaces!");
    }
} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters");
}