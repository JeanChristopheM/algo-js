// Dependencies declaration
const readlineSync = require("readline-sync");
const fs = require('fs/promises');
// specify the path to the file, and create a buffer with characters we want to write
let path = './7/db.txt';
// App menu stored as string in the menu variable
let menu = `Hello ! Welcome to the Pizza Flavors Manager.\n\nPlease choose your actions :\n\n1. List all the pizza flavors\n2. Add a new pizza flavor\n3. Remove a pizza flavor\n4. Exit this program\n\nEnter your action's number : `;

const writeDB = async (data) => {
    getDB().then((result) => {
        result.flavors.push(data);
        let buffer = Buffer.from(result);
        // open the file in writing mode, adding a callback function where we do the actual writing
        fs.open(path, 'w', 0, function(err, fd) {
            // If the output file does not exists
            // an error is thrown else data in the
            // buffer is written to the output file
            if(err) {
                console.log('Cant open file');
            }else {
                fs.write(fd, buffer, 0, buffer.length, 
                        null, function(err,writtenbytes) {
                    if(err) {
                        console.log('Cant write to file');
                    }else {
                        console.log(writtenbytes +
                            ' characters added to file');
                    }
                })
            }
        })
    });
};

const getDB = async () => {
    const data = await fs.readFile(path, 'utf-8');
    return JSON.parse(data);
}
const start = () => {
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
                if (result) console.log(`Your current flavors are ${result.flavors}`);
                else console.log('The database is currently empty');
                setTimeout(() => {
                    start();
                }, 2000);
            });
            break;
        case "2":
            let newFlavor = readlineSync.question('Please enter your new flavor : ');
            writeDB(newFlavor);
            break;
        case "3":
            console.log("Third one picked");
            break;
        case "4":
            console.log("Fourth one picked");
            break;
    }
}
let menuPick;
start();



