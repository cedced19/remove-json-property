let fs = require('fs');

let input = require('./input.json');

let toExclude = ['sectorLink', 'themeLink'];

let output = [];
input.forEach(function(obj) {
    let out = obj;
    for (let key in toExclude) {
        delete out[toExclude[key]];
    }
    output.push(out);
})

fs.writeFileSync('./output.json', JSON.stringify(output), 'utf8');