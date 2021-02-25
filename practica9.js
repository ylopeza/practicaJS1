// Ejercicio dia de la semana
// creamos variable para almecenar el dia a la semana
let dia = prompt("ingresa un dia de la semana");
// validamos el dia si es entre semana o fin de semana
dia = dia.toLowerCase()
// convertir lo que escriba el usuario en minusculas, sin imoportarcomo lo escriba
if (dia == "lunes"  || dia == "martes" || dia == "miercoles"  || dia == "miércoles"|| dia == "jueves"  ||  dia == "viernes"){
    alert("es un dia entre semana");
} else {
     if (dia == "sabado" ||  dia == "sábado" || dia == "domingo") {
         alert("es un fin de semana");
     } else {
         alert("por favor ingresar un dia a la semana");
         
     }
    
    
}
/**
 * 1- que pasa si no escriben nada?
 * 
 * 
 */