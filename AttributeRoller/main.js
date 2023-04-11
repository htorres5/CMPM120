class Player {
    constructor(characterName = 'Luffy') {
        this.name = characterName;
        this.attributes = {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0
        };
    }

    rollAttributes () {
        for (const key in this.attributes) {
            let results = diceRoller(4, 6);

            // numeric sort w/ compare function
            results.sort(function(a, b) {return a - b});

            // remove lowest dice roll
            results.shift();

            let sum = sumArrayElements(results);

            this.attributes[key] = sum;
        }
    }

    printPlayer() {
        console.log(`NAME: ${this.name}`);
        for (const [key, value] of Object.entries(this.attributes)) {
            console.log(`${key.slice(0,3).toUpperCase()}: ${value}`)
        }
    }
}

function diceRoller(times, sides) {
    let results = [];
    for (let i = 0; i < times; i++) {
        results.push(Math.floor(Math.random() * sides + 1));
    }

    return results;
}

function sumArrayElements(array) {
    return array.reduce((total, currentNumber) => total + currentNumber);
}

const player01 = new Player();
player01.rollAttributes();
player01.printPlayer();
const player02 = new Player('Zoro');
player02.rollAttributes();
player02.printPlayer();