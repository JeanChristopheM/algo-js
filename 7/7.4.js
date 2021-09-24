// Dependencies declaration
const readlineSync = require("readline-sync");
const fs = require('fs');
// specify the path to the file, and create a buffer with characters we want to write
let path = './7/db.txt';
// App menu stored as string in the menu variable
let menu = `Hello ! Welcome to the Pizza Flavors Manager.\n\nPlease choose your actions :\n\n1. List all the pizza flavors\n2. Add a new pizza flavor\n3. Remove a pizza flavor\n4. Exit this program\n\nEnter your action's number : `;

const writeDB = (data) => {
    // open the file in writing mode, adding a callback function where we do the actual writing
    fs.open(path, 'w', function(err, fd) {
        if (err) {
            throw 'could not open file: ' + err;
        }
    
        // write the contents of the buffer, from position 0 to the end, to the file descriptor returned in opening our file
        fs.write(fd, buffer, 0, buffer.length, null, function(err) {
            if (err) throw 'error writing file: ' + err;
            fs.close(fd, function() {
                console.log('wrote the file successfully');
            });
        });
    });
}
let content;
const getDB = () => {
    fs.readFile(path, function(err, data) {
        if (err) {
            throw 'could not open file : ' + err;
        }
        content = JSON.parse(data.toString());
        console.log("inside of fs.read " + JSON.stringify(content));
    });
    console.log('checking inside of DB function ' + content);
    return content;
}

console.clear();
let menuPick = readlineSync.question(menu);
while (menuPick < 1 || menuPick > 4) {
    console.clear();
    console.log('Wrong choice, try again...');
    menuPick = readlineSync.question(menu);
}
switch (menuPick) {
    case "1": 
        let result = getDB();
        console.log("checking after case " + result);
        if (result) console.log(`Your current flavors are ${result}`);
        else console.log('The database is currently empty');
        break;
    case "2":
        console.log("Second one picked");
        break;
    case "3":
        console.log("Third one picked");
        break;
    case "4":
        console.log("Fourth one picked");
        break;
}

//let buffer = Buffer.from(input);
