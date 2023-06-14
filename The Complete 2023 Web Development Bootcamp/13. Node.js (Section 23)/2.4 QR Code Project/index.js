import inquirer from "inquirer";
import qr from "qr-image";
import * as fs from "node:fs";

// 1. Use the inquirer npm package to get user input.
inquirer
    .prompt([{
        /* Pass your questions in here */
        message: "Please enter your URL:",
        name: "Website"
    }])
    .then((answers) => {
        // Use user feedback for... whatever!!
        const Website = answers.Website;

        // 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
        // qr.image(text, [ec_level | options])
        var qr_svg = qr.image(Website);
        qr_svg.pipe(fs.createWriteStream("qr_img.png"));

        // 3. Create a txt file to save the user input using the native fs node module.
        // fs.writeFile(file, data[, options], callback)
        fs.writeFile('Website.txt', Website, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });