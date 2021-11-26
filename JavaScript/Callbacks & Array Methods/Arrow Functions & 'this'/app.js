const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    },
    shoutName: function(){
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName());
        }, 3000)
    }
}