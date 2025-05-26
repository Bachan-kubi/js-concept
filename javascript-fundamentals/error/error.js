try {
    console.log("x");
    lll;
    console.log('end of try block');
} catch (error) {
    console.log(error.stack);
} finally{
    console.log('it always runs');
}
console.log('executin continues!');
