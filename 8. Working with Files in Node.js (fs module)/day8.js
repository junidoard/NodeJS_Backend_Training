const fs = require("fs");

fs.writeFile("notes.txt", "This is my first file in Node.js.", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});

fs.appendFile("notes.txt", "\nI am learning Node.js. file system module.", (err) => {
    if (err) throw err;
    console.log("The file has been updated!");
});

fs.readFile("notes.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.rename("notes.txt", "myNotes.txt", (err) => {
    if (err) throw err;
    console.log("File renamed!");
});

fs.unlink("myNotes.txt", (err) => {
    if (err) throw err;
    console.log("File deleted!");
});