const fs = require("fs");
const execFile = require('child_process').execFile;

// Watch the templates directory
fs.watch("./templates", { persistent: true }, function (event, fileName) {
    if (fileName.endsWith('.liquid')) {
        console.log("Deploying " + fileName + "...");
        execFile('./upload.sh', ["./templates/" + fileName], (error, stdout, stderr) => {
            if (error) {
                throw error;
            }
            console.log(stdout);
        });
    }
});

function run_cmd(cmd, args, callBack ) {}





