// -------------------------------ejercicio 1---------------------------------
const numMaterias = document.getElementById('numMaterias');
let subtotal;
let total;
let descuento;

numMaterias.addEventListener('change', (e) => {
    let materias = document.getElementById('div-materias');
    materias.innerHTML = "";
    for(var i = 0; i< numMaterias.value; i++){
        materias.innerHTML += `<li><input type="number" placeholder="valor materia ${i}" id="valor${i}" step="1000"></li>`;
    }
});

const boton1 = document.getElementById('boton1');
boton1.addEventListener('click', (e) =>{
    e.preventDefault();
    total = 0;
    subtotal = 0;
    descuento = 0;

    for(var i = 0; i< numMaterias.value; i++){
        var valorMateria = document.getElementById('valor'+i);
        subtotal += parseFloat(valorMateria.value);
    }

    descuento = (subtotal * 2)/10;
    total = subtotal - descuento + 28000;

    let totalText = document.getElementById('total');
    totalText.innerText = "Valor total : " + total;
})


// -------------------------------ejercicio 2---------------------------------

var boton2 = document.getElementById('boton2');

boton2.addEventListener('click', (e) => {
    //obtiene los valores de los inputs
    const a = document.getElementById('numUno').value;
    const b = document.getElementById('numDos').value;
    const c = document.getElementById('numTres').value;
    const d = document.getElementById('numCuatro').value;

    //guarda los outputs
    const numMayor = document.getElementById('resultadoMayor');
    const numMenor = document.getElementById('resultadoMenor');

    
    //validar que no sean iguales
    if ((a == b) || (a == c) || (a == d)) {
        alert("No puede haber números repetidos 1");
    } else if ((b == c) || (b == d)) {
        alert("No puede haber números repetidos 2");
    } else if (c == d) {
        alert("No puede haber números repetidos 3");
    } else {
        myArr = [a, b, c, d];//crea un arreglo para usar los metodos min y max
        //calcular el mayor
        var mayor = Math.max(...myArr);
        //calcular el menor
        var menor = Math.min(...myArr);

        numMayor.innerText = mayor;
        numMenor.innerText = menor;
    }

})

