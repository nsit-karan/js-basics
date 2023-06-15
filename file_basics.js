const fs = require('fs');

// callback when file read completes
function readCallback(err, contents) {
    if (err) {
        throw err;
    } else {
        console.log("File read completed, contents are as follows");
        console.log(contents);
    }
}

// calback hander when file write completes
function writeCallback(err) {
    if (err) {
        throw err;
    } else {
        console.log("File write completed, check the contents");
    }
}

fs.readFile("file_basics_read.txt", "utf8", readCallback);
fs.writeFile("file_basics_write.txt", "here are the contents to be writte", writeCallback);

