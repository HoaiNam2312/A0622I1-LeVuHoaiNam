function myFunction(param) {
    param("Ngu");
}

function myCallback(value) {
    console.log("Value: ", value);
}

myFunction(myCallback);