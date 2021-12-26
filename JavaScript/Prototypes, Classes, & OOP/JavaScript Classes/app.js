// // //This function makes and returns an object every time it is called.
// // //The resulting objects all follow the same "receipe"
// // function makeColor(r, g, b) {
// //     const color = {};
// //     color.r = r;
// //     color.g = g;
// //     color.b = b;
// //     color.rgb = function() {
// //         const {r,g,b} = this;
// //         return `rgb(${r}, ${g}, ${b})`;
// //     };
// //     color.hex = function() {
// //         const {r,g,b} = this;
// //         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// //     };
// //     return color;
// // }

// // const firstColor = makeColor(35, 255, 150);
// // const black = makeColor(0, 0, 0);

// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// // 공통 메소드
// Color.prototype.rgb = function() {
//     const {r,g,b} = this;
//     return `rgb(${r}, ${g}, ${b})`;
// }

// Color.prototype.hex = function() {
//     const {r,g,b} = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// Color.prototype.rgba = function(a=1.0) {
//     const {r,g,b} = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// }

// const color1 = new Color(40, 255, 60);
// const color2 = new Color(0, 0, 0);

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    innerRGB() {
        const {r,g,b} = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a=1.0) {
        return `rgb(${this.innerRGB()}, ${a})`;
    }
    hex() {
        const {r,g,b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}

const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');