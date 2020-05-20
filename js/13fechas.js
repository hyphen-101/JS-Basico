const fechaHoy = new Date();

// Retorna el num de mes = 0 = Enero
/*se recomienda + 1 para tener el num de mes en calendarrio */
console.log(fechaHoy.getMonth() + 1);

/*Retorna el num de dia: 0 = domingo */
console.log(fechaHoy.getDay());

/**retorna el num de dia del mes */
console.log(fechaHoy.getDate());
/**Minutos de la hora */
console.log(fechaHoy.getMinutes());
/**las horas del dia */
console.log(fechaHoy.getHours());
/**timestamp */
console.log(fechaHoy.getTime());

/**Para establecer el año */
console.log(fechaHoy.setFullYear(1992));
console.log(fechaHoy.getFullYear());