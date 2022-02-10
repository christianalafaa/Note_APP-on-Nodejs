
const fs = require("fs");

const getNotes = () => {
    try {
        return JSON.parse(fs.readFileSync("notes.txt"));
    } catch (error) {
        return [];
    }
} 

const addNotes = (title, body) =>  {
    // const notes = [];
    // notes.push(JSON.parse(fs.readFileSync("notes.txt")));

    // try {
    //     notes.push(JSON.parse(fs.readFileSync("notes.txt")));
    // } catch (error) {
    //     notes = [];
    // }

    const notes = getNotes();
    const note = {
        title,
        body
    };

    const duplicate = notes.filter((note) => note.title === title);

    if (duplicate.length === 0) {
        
    notes.push(note);

    fs.writeFileSync("notes.txt", JSON.stringify(notes))

    logNotes(note)
    } else {
        console.log("Name already exists")
    }

    // notes.push(note);

    // fs.writeFileSync("notes.txt", JSON.stringify(notes))

    // logNotes(note)
};

const deleteNotes = (title) => {
    const notes = getNotes();

    const deletedNotes = notes.filter((note) => note.title !== title);
    fs.writeFileSync("notes.txt", JSON.stringify(deletedNotes))
}

const readNotes = (title) => {
    const notes = getNotes();

    const notesRead = notes.filter((note) => note.title === title);
    // fs.writeFileSync("notes.txt", JSON.stringify(notesRead))
    // console.log(`Title: ${notesRead[0].title}, Body: ${notesRead[0].body}`);

    logNotes(notesRead[0]);
}

const listNotes = () => {
    const notes = getNotes();

    notes.forEach((note) => logNotes(note))
}

const logNotes = (note) => {
    console.log("************************");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNotes,
    deleteNotes,
    readNotes,
    listNotes
}

// module.exports.add = function(a,b) {
//     return a+b
// }