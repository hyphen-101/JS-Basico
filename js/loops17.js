  //for loop
  for (let i = 0; i <= 10; i++) {
      console.log(i);
  }
  //Carrito
  const carrito = ['obj 1', 'obj 2', 'obj 3'];

  for (let i = 0; i < carrito.length; i++) {
      console.log(carrito[i]);
  }

  //while
  let i = 0;
  while (i <= 10) {
      console.log(`Numero: ${i}`);
      i++;
  }
  let j = 0;
  while (j < carrito.length) {
      console.log(`${carrito[j]} del carrito`);
      j++;
  }

  // do while
  let k = 0;
  do {
      console.log('Num:' + k);
      k++
  } while (k <= 10);