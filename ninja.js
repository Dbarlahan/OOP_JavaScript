class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
    sayName() {
        console.log(`Name: ${this.name}`);
        return this;
    }
    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
        return this;
    }
    drinkSake() {
        this.health += 10;
        return this;
    }
}

const ninja1 = new Ninja('Hyabusa', 0);
const ninja2 = new Ninja('Momochi', 50, 5, 10)

ninja1.sayName().drinkSake().showStats()
ninja2.showStats()