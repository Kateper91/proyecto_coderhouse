
const btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');
    btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
    boton = document.getElementById('boton');
});

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (e) =>{
     e.preventDefault();
     e.target.children[0].children[0].value="";
     e.target.children[0].children[1].value="";
     e.target.children[0].children[2].value="";
     e.target.children[0].children[3].value="";
})
btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

const capturar = () =>{
    function gastos(fecha, gasto, detalle, costo){
		this.fecha=fecha;
        this.gasto=gasto;
        this.detalle=detalle;
		this.costo= costo;
    }
	const fechaCapturar = document.getElementById("fecha").value;
    const gastoCapturar = document.getElementById("gasto").value;
    const detalleCapturar = document.getElementById("detalle").value;
	const costoCapturar =  document.getElementById("costo").value;
    nuevosGastos = new gastos(fechaCapturar,gastoCapturar,detalleCapturar,costoCapturar);
    if (localStorage.getItem("nuevosGastos") === null) {
        localStorage.setItem("nuevosGastos", JSON.stringify(nuevosGastos));
      }
    agregar(nuevosGastos);
}
const baseDatos = [];
const agregar = (gastos) => {
    baseDatos.push(gastos);
    document.getElementById("tabla", JSON.stringify(gastos)).innerHTML += '<tbody><td>'+nuevosGastos.fecha+'</td><td>'+nuevosGastos.gasto+'</td><td>'+nuevosGastos.detalle+'</td><td>'+nuevosGastos.costo+'</td></tbody>';
    console.log(baseDatos)
};




