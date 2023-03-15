alert("Hola, gracias por utilizar la página!")
let arrayEmps = [];
let empId;
let compClave;
function ingresoNuevoEmpleado() {
    alert("Estás a punto de ingresar datos sensibles\nPresta especial atención a las referencias\nUtiliza mayúscula en los nombres propios\nEvita el uso de caracteres especiales\n(la totalidad de tus datos estarán cifrados en los servidores de la empresa y NO se compartirán bajo ningún concepto, de acuerdo con nuestra política de privacidad)\n--Adelante entonces!!-->-->")
    let nb = prompt ("Nombre: ");
    let ap = prompt ("Apellido: ");
    let cr = +prompt ("Cargo: (formato: [n] nro. del 1 al 4)");
    let dc = +prompt ("Documento: (formato: [nnnnnnnn] 7 u 8 dígitos numéricos sin espacios, puntos ni guiones)");
    let ig = +prompt ("Fecha de ingreso: (formato: [aaaamm] año y mes sin espacios, puntos ni guiones)");
    empId = new nuevoEmpleado (nb, ap, cr, dc, ig, nuevaClave);
    alert("Tu nuevo número de empleado es "+nuevaClave+" y con el, tendrás acceso a la página de Personal");   
}
function accesoPersonal(){
    compClave = prompt ("Bienvenido al área de personal\nPor favor, ingresa con tu número de empleado:");
    if(compClave>nuevaClave||compClave<=0){
        accesoPersonal();
    }
}
class nuevoEmpleado{
    constructor (nomb, apell, car, doc, ing, clv){
        this.nombre = nomb;
        this.apellido = apell;
        this.cargo = car;
        this.documento = doc;
        this.ingreso = ing;
        this.clave = clv;
    }
}
const emp1 = new nuevoEmpleado ("Pepe", "Gonzalez", 3, 26538924, 199804, 1);
const emp2 = new nuevoEmpleado ("Ruso", "Perez", 3, 19568743, 200404, 2);
const emp3 = new nuevoEmpleado ("Germán", "Ramirez", 1, 38320862, 201112, 3);
const emp4 = new nuevoEmpleado ("Gualberto", "Fernandez", 3, 18533921, 201910, 4);
const emp5 = new nuevoEmpleado ("Luis", "Suarez", 1, 24876331, 201710, 5);
const emp6 = new nuevoEmpleado ("Angelito", "Correa", 4, 19534912, 202111, 6);
arrayEmps = [emp1, emp2, emp3, emp4, emp5, emp6];
console.log(arrayEmps);
let nuevaClave = arrayEmps.length +1;
console.log(nuevaClave);
ingresoNuevoEmpleado();
arrayEmps.push(empId);
console.log(arrayEmps);
console.log(empId);
accesoPersonal();
function bienvenidoPersonal(){
    console.log(compClave);
    const identi = arrayEmps.find (ident=> (ident.clave==compClave));
    console.log(identi.nombre);
    alert("Hola "+identi.nombre+" "+identi.apellido+", cómo estás?\nEs un verdadero gusto tenerte por acá!!!");
}
bienvenidoPersonal()
