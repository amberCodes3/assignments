let readline = require('readline-sync');
let isAlive = true


//Console must greet player with a fun message
console.log("Hey there player, you are about to embark on a fun quest");


//Console must ask for the player's name and store it
let name = readline.question("What is your name?:");


function Hero(name){
    this.name = name
    this.hp = 30 //health point 
    this.ap = 8 //attack point 
    this.inventory = ["food", " water", " sword"]
}

const player = new Hero(name)


//The console will ask the user to enter a "w" to walk
while(isAlive){
    let action = readline.keyIn(name + " Enter W to Walk, enter P to Print Inventory, enter Q to Quit ", {limit: 'wpq'})
    if (action.toLowerCase() === 'w'){
        walk()
    } else if (action.toLowerCase() === 'p'){
        printInventory()
    }else {
        console.log('You have quit the game')
        isAlive = false
    }
}


//If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory

function printInventory(){
    console.log(player.name + " you have " + player.inventory)
    console.log("Your hp is " + player.hp)
};


/*Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)*/
function walk(){
    console.log("Walking along")
   
    let fightChance = Math.floor(Math.random() * 3) + 1;
    console.log("You arrive at a crossroads. After studying the paths you chose the " + fightChance + " path");

    switch(fightChance) {
        case 1:
            enemyEncounter()
            break;
        case 2:
            console.log("You need to keep walking")
            break;
        default:
            console.log("After a short water break, you start walking again")
            break;
    };
}

/*If attacking, a random amount of damage will be delt between a min and max. If running, there will be a 50% chance of escaping
After the player attacks or runs the enemy attacks back for a random damage amount.
If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory. After this, the player will continue walking. Use a while loop to control this flow.
If the enemy kills the player the console prints a cool death message and the game ends.
*/

function createEnemy(){
    function Enemy(name, hp){
        this.name = name
        this.hp = hp 
        this.ap = 6 
    }
    const enemies = ["Bigfoot", "Chupacabra", "Werewolf"]

    const randomName = enemies[Math.floor(Math.random() * enemies.length )]
    console.log(randomName + " appears!!!")
    
    const randomHP = Math.floor(Math.random() * 30) + 1

    return new Enemy(randomName, randomHP);
    
}

function enemyEncounter(){
    const currentEnemy = createEnemy()
    console.log(currentEnemy)
    
    let action = readline.keyIn(name + `, you have encountered ${currentEnemy.name}. You can enter A for Attack or R for Run `, {limit: 'ar'});

    if(action === 'a'){
        fight(currentEnemy)
    }else if (action === 'r'){
        run(currentEnemy)
    }

}

function fight(enemy){
    const items = [{name: 'shield', hp: 20, ap: 3}, {name: 'map', hp: 2, ap:0}, {name: 'healing potion', hp:30, ap:0}]
    while(enemy.hp > 0 && player.hp > 0){
        player.hp -= Math.floor(Math.random() * enemy.ap) + 2
        enemy.hp -= Math.floor(Math.random()* player.ap) + 2 
        console.log(`
            ${player.name} .vs. ${enemy.name} 
            Player HP: ${player.hp}
            Enemy HP: ${enemy.hp}
        `)

    }
    if(enemy.hp < 0){
        console.log(`you defeated ${enemy.name}`)
        let item = items[Math.floor(Math.random() * items.length)]
        player.inventory.push(item.name)
        console.log(`You are awarded ${item.name}`)
        

    }else {
        console.log(`${enemy.name} killed you`)
        isAlive = false
    }
}
        


function run (enemy){
    let run = Math.floor(Math.random() * 2) + 1;
    console.log(`${player.name}, you decided to run away from ${enemy.name}`)
    switch(run) {
        case 1:
            console.log(`${player.name}, you were faster and escaped the claws of ${enemy.name}`)
            break;
        default:
            console.log(`${player.name}, ${enemy.name} was faster and caught you. You were not able to escape the grasp of ${enemy.name}. You are no longer alive`);
            isAlive = false
            break;
    };
}