// Dependencies declaration
const readlineSync = require("readline-sync");
const fs = require('fs/promises');
// specify the path to the file, and create a buffer with characters we want to write
let path = './7/7.4.db.txt';
// App menu stored as string in the menu variable
let menu = `Hello ! Welcome to the Pizza Flavors Manager.\n\nPlease choose your actions :\n\n1. List all the pizza flavors\n2. Add a new pizza flavor\n3. Remove a pizza flavor\n4. Exit this program\n\nEnter your action's number : `;

const writeDB = async (data) => {
    getDB().then((result) => {
        result.flavors.push(data);
        let buffer = Buffer.from(JSON.stringify(result));
        fs.writeFile(path, buffer);
    });
};
const removeDB = async (index) => {
    getDB().then((result) => {
        result.flavors.splice(index, 1);
        let buffer = Buffer.from(JSON.stringify(result));
        fs.writeFile(path, buffer);
    });
}

const getDB = async () => {
    let data = await fs.readFile(path, 'utf-8');
    if (data === "") {
        data = `{"flavors":[]}`;
        let buffer = Buffer.from(data);
        fs.writeFile(path, buffer);
    }
    return JSON.parse(data);
}
const start = async () => {
    console.clear();
    menuPick = readlineSync.question(menu);
    while (menuPick < 1 || menuPick > 4) {
        console.clear();
        console.log('Wrong choice, try again...');
        menuPick = readlineSync.question(menu);
    }
    switch (menuPick) {
        case "1": 
            getDB().then((result) => {
                console.clear();
                if (result.flavors.length > 0) console.log(`Your current flavors are ${result.flavors}`);
                else console.log('The database is currently empty');
                setTimeout(() => {
                    start();
                }, 2000);
            });
            break;
        case "2":
            console.clear();
            let newFlavor = readlineSync.question('Please enter your new flavor\nOR\nType cancel to cancel : ');
            if (newFlavor === "cancel") {
                start();
            }
            else {
                await writeDB(newFlavor);
                setTimeout(() => {
                    start();
                }, 500);
            }
            break;
        case "3":
            getDB().then((result) => {
                console.clear();
                if (result) {
                    console.log(`Current flavors are : `);
                    for (i=0;i<result.flavors.length;i++) {
                        console.log(`${i}. ${result.flavors[i]}`)
                    }
                }
                else console.log('The database is currently empty');
                let deleteChoice = readlineSync.question('\nPlease enter the number of the item you want gone\nOR\nType cancel to cancel : ');
                if (deleteChoice === "cancel") {
                    start();
                }
                else {
                    let deletedItem = result.flavors[deleteChoice];
                    removeDB(deleteChoice);
                    console.log(`Deleted "${deletedItem}" from the list.`);
                    setTimeout(() => {
                        start();
                    }, 2000);
                }
            });
            break;
        case "4":
            console.log("Bye bye");
            break;
    }
}
let menuPick;
start();



