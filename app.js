console.log('starting App.js');

// const fs = require('fs');
// const { argv } = require('process');
const yargs = require('yargs')
const notes = require("./notes.js")
const argv = yargs.argv;




// console.log("Process",process.argv);
// console.log("Yargs", yargs.argv)

const title = yargs.argv.title;
const body = yargs.argv.body;
const command = yargs.argv._[0];

if (command === "add") {
    console.log("adding notes")
    notes.addNotes(title, body);
} 

else if (command === "remove") {
    console.log("removing note")
    notes.deleteNotes(title)
} 

else if (command === "read") {
    console.log("reading note")
    notes.readNotes(title)
} 

else if (command === "list") {
    console.log("listing all notes")
    notes.listNotes()
} 

else {
    console.log("unknown command was used")
}

