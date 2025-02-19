/* EJERCICIO 1 */
    // Creamos un vector con números del 1 al 100
    let vector = [];
    for (let i = 1; i <= 100; i++) {
        vector.push(i);
    }

    // Sumamos todos los números
    let suma = 0;
    for (let i = 0; i < vector.length; i++) {
        suma += vector[i];
    }

    // Mostramos el resultado en el HTML
    document.getElementById("ej1-resul").textContent = "La suma de los números del 1 al 100 es: " + suma;


    /* EJERCICIO 2 */
    let vector2 = [];

    function agregarNumero() {
        let entrada = document.getElementById("entrada").value;
        if (!isNaN(entrada) && entrada !== "0") {
            vector2.push(Number(entrada));
            document.getElementById("entrada").value = "";
        } else {
            mostrarResultado();
        }
    }
    
    function mostrarResultado() {
        let pares = 0, impares = 0;
        for (let i = 0; i < vector2.length; i++) {
            vector2[i] % 2 === 0 ? pares++ : impares++;
        }

        // Soy un poco tiquismiquis JAJAJAJ, quería poner par o pares, e impar o impares
        let palabraPar = "";
        let palabraImpar = "";

        pares > 1 || pares === 0 ? palabraPar = " números pares y " : palabraPar = " número par y ";
        impares > 1 || impares === 0 ? palabraImpar = " números impares." : palabraImpar = " número impar."

        document.getElementById("ej2-resul").textContent = "Array: {" + vector2.join(", ") + "} Hay " + pares + palabraPar + impares + palabraImpar;
    }