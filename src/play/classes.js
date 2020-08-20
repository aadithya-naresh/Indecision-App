class Person{
    constructor(name='Anonymous',age=0){
        this.name = name
        this.age = age
    }
    getGreeting(){
        return `Hi,I'm ${this.name}`
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Traveller extends Person{
    constructor(name,age,homeLocation){
        super(name,age)
        this.homeLocation = homeLocation
    }
    getGreeting(){
        let greeting = this.getDescription()
        greeting += `from ${this.homeLocation}`
        return greeting
    }
}
const me = new Traveller('Bigileyyyy',47,'Chennai')
console.log(me.getGreeting())