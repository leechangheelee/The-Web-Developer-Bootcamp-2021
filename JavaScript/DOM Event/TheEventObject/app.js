document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt);
});

// const input = document.querySelector('input');
// input.addEventListener('keydown', function (e) {
//     // console.log("KEYDOWN");
//     console.log(e.key);
//     console.log(e.code);
// })
// input.addEventListener('keyup', function () {
//     console.log("KEYUP");
// })

// GLOBAL하게 EVENT 처리
window.addEventListener('keydown', function (e) {
    //console.log(e.code);
    switch(e.code){
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break;
        default:
            console.log("IGNORED!");
    }
});