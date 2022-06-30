function Calculate() {
  const priceEthanol = document.getElementById('ethanol');
  const ethanol = priceEthanol.value;
  const pricePetrol = document.getElementById('petrol');
  const petrol = pricePetrol.value;

  const img = document.getElementById('status');

  const operation = parseFloat(ethanol) / parseFloat(petrol);
  console.log(operation.toFixed(2));

  const bestOption = document.getElementById('bestOption');

  const bestOptionSpan = document.getElementById('bestOptionSpan');
 

  if (operation < 0.7) {
    img.src = 'etanol.png'
    console.log('Ethanol');
    bestOption.innerHTML = '$ ' + (operation.toFixed(2));
    bestOptionSpan.innerHTML = (' Beter is Ethanol');
  } else {
    img.src = 'gasolina.png'
    console.log('Petrol');
    bestOption.innerHTML = '$ ' + (operation.toFixed(2));
    bestOptionSpan.innerHTML = (' Beter is Petrol');
  }
}

function Remove() {
  document.getElementById('form').reset();
}