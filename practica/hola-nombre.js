function changeName () {
    let name = prompt("¿Cuál es tu nombre?")
    document.getElementById("Hello").innerHTML = "¡Hola " + name + "!";
}