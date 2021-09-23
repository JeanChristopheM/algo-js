const readlineSync = require("readline-sync");
let tvshow = {};

const askTvSerie = () => {
    tvshow.name = readlineSync.question('Please enter the name of your favorite tv show : ');
    tvshow.year = readlineSync.question('In what year was it produced ? : ');
    tvshow.cast = [];
    let keepGoing = true;
    while (keepGoing) {
        let input = readlineSync.question('Please give me the cast (type stop to finish): ');
        if (input != "stop") {
            tvshow.cast.push(input);
        } else keepGoing = false;
    }
    return tvshow;
}

const rand = (max) => {
    return Math.round((Math.random() * (max-1)));
}

const randomizeCast = (tvshow) => {
    let newCast = [];
    let newIndex = [];
    while (newIndex.length < tvshow.cast.length) {
        let tempIndex = rand(tvshow.cast.length);
        if (!newIndex.includes(tempIndex)) newIndex.push(tempIndex);
    }
    for (i=0;i<tvshow.cast.length;i++) {
        newCast.push(tvshow.cast[newIndex[i]]);
    }
    return newCast;
}

console.log(`Your favorite show object : ${JSON.stringify(askTvSerie())}`);
console.log(`And here's a random cast with the current cast: ${randomizeCast(tvshow)}`);