/* sleep function */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/*  sleep(ms).then(() => { function(); });  */

