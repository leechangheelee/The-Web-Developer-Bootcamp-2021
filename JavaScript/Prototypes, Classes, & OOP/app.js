String.prototype.yell = function() {
    return `OMG!!! ${this.toUpperCase()}!!!! AGHGHGHGH!`;
}

//오버라이딩
Array.prototype.pop = function() {
    return "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!";
}