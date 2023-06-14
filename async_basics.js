
let counter = 0;
function intervalCallback() {
    console.clear();
    console.log(counter);
    counter++;
}

/**
 * setInterval invokes the callback (1st arg)
 * every 1000ms (1s)
 */
setInterval(intervalCallback, 1000);
