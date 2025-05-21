function actualizarReloj() {
  const ahora = new Date();

  // Fecha en formato largo
  const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const fechaFormateada = ahora.toLocaleDateString('es-ES', opcionesFecha);

  // Hora con AM/PM
  let horas = ahora.getHours();
  const minutos = ahora.getMinutes().toString().padStart(2, '0');//agrega un 0 si el numeor tiene 1 digito
  const segundos = ahora.getSeconds().toString().padStart(2, '0');
  const ampm = horas >= 12 ? 'PM' : 'AM'; //operador ternario (if-else)

  horas = horas % 12;//tengo que hacer esto porque tengo el formato de 24 hs
  horas = horas ? horas : 12; // el 0 se convierte en 12

  const horaFormateada = `${horas}:${minutos}:${segundos} ${ampm}`;

  // Mostrar en la pagina
  document.getElementById("fecha").textContent = fechaFormateada;
  document.getElementById("hora").textContent = horaFormateada;
}

// Ejecutar al cargar y luego cada segundo
actualizarReloj();
setInterval(actualizarReloj, 1000);