// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const doubles = numbers.map(function(num){
//     return num * 2;
// })

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ]

// const titles = movies.map(function(movie){
//     return movie.title.toUpperCase();
// })

// const add = function(x, y){
//     return x + y;
// }

// const add = (x,y) => {
//     return x + y;
// }


/* 파라미터 하나면 괄호 안감싸도 됨 */
//const square = (x) => {
const square = x => {
    return x * x;
}

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

const rollDie = () => Math.floor(Math.random() * 6) + 1;

const add = (a, b) => a + b;