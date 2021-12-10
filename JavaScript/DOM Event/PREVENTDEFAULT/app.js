const form = document.querySelector('#shelterForm');

form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("SUBMITTED THE FORM!");
    console.log(e);
})