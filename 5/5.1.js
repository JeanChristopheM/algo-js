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
console.log(`Your favorite show object : ${JSON.stringify(askTvSerie())}`);