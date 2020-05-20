const metodoPago = 'cheque';

switch (metodoPago) {
    case 'efectivo':
        console.log('Gracias por su pago en efectivo');
        break;
    case 'cheque':
        console.log('Validando cheque, porfavor espere...');
        break;
    case 'tarjeta':
        console.log('Vailando fondos, porfavor espere...');
        break;
    default:
        console.log('Aun no has pagado o Forma de pago no valida');
        break;
}