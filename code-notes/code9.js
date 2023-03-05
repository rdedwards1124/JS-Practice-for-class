

function returnHello() {
    return 50
}

function helloWorld(hello){
    hello = "Helloe World"
    console.log(hello)
}

function helloClass(hello) {
    if (hello === "50") {
        console.log(hello + 10)
    } else {
        console.log(hello + 20)
    }
}

helloWorld(returnHello())
helloClass(returnHello())


