var cuentas = [
    { nombre: "Mali", password: "12345", saldo: 200 },
    { nombre: "Gera", password: "12345", saldo: 290 },
    { nombre: "Maui", password: "12345", saldo: 67 }
];

let monto = "";
let sesionIniciada = undefined;
let montoMaximo = 990;
let montoMinimo = 10;


function login(form) {
    let user = document.querySelector("#user").value;
    let pass = document.querySelector("#pass").value;
    let saldo = "";

    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre == user && cuentas[i].password == pass) {
            document.querySelector("#inicio").innerText = ("Bienvenido " + user);
            document.querySelector("#inicio").style.display = "block";
            document.querySelector("#saldo").innerText = ("Tu saldo disponible es de " + cuentas[i].saldo);

        }
        document.querySelector("#inicio").innerText = ("Datos incorrectos, intenta nuevamente");

    }
}


function verificar() {
    if (sesionIniciada !== undefined) {
        document.querySelector("#saldo").innerText = ("Tu saldo disponible es de " + cuentas[sesionIniciada].saldo);
    }
}

function ingresar() {
    if (sesionIniciada !== undefined) {
        let nuevoSaldo = cuentas[sesionIniciada].saldo + parseFloat(document.querySelector("depositar - input"))
        if (nuevoSaldo > 990) {
            document.querySelector("#saldo").innerText = ("No puedes tener mas de 990");
        } else {
            cuentas[sesionIniciada].saldo = nuevoSaldo;
            document.querySelector("#saldo").innerText = ("Tu saldo disponible es de " + cuentas[sesionIniciada].saldo);
        }
        document.querySelector("depositar-input").value = "";

    }
}

function retirar() {
    if (sesionIniciada !== undefined) {
        let nuevoSaldo = cuentas[sesionIniciada].saldo - parseFloat(document.querySelector("depositar-input").value);
        if (nuevoSaldo < 10) {
            document.querySelector("#saldo").innerText = ("No puedes tener saldo menor a 10");
        } else {
            cuentas[sesionIniciada].saldo = nuevoSaldo;
            document.querySelector("#saldo").innerText = ("Tu saldo disponible es de " + cuentas[sesionIniciada].saldo);
        }
        document.querySelector("retiro-input").value = "";

    }
}
