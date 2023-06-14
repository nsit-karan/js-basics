
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

function timeoutCallback() {
    console.log("timeout call back called once, over and out");
}

/**
 *
 * setTimeout invokes the callback after
 * the timeout set in ms
 *
 * Note - its called only once, unlike
 * setInterval which gets called repeatedly
 */
setTimeout(timeoutCallback, 2500);
