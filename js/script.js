//Dati
const container = document.querySelector('.container');
const limit = 100;

//Logica
for (let i = 1; i <= limit; i++) {

  // creo il box
  const box = document.createElement('div');
  // aggiungo la classe
  box.className = 'box';
  // scrivo dentro il box
  box.innerHTML = i;


  //Risultato
  if (!(i % 3) && (i % 5)) {
    box.classList.add('giallo');
    box.innerHTML = 'Fizzbuzz'
  }
  else if (!(i % 5)) {
    box.classList.add('orange');
  }
  else if (!(i % 3)) {
    box.classList.add('grey');
  }
  else {
    box.classList.add('green');
  }

  // lo aggiungo al container
  container.append(box);
}





