const usuario= document.getElementById ("nombregasto").value;
const gasto= document.getElementById ("numerogasto").value;
const usuarios= [];
const gastos= [];


function calculogasto() {
usuarios.push(usuario);
gastos.push(gasto);
let suma=0;
for(let gasto of gastos){suma=suma+gasto;
document.getElementById("gastototal").innerHTML=suma;
}

}

