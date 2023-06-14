const fs = require("fs");

// //fs.writeFile(file, data[, options], callback)
fs.writeFile("message.txt", "Hello from NodeJs!", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});

//fs.readFile(path[, options], callback)
fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});