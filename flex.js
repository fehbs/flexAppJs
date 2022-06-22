function Calculate() {
  const priceEthanol = document.getElementById('ethanol');
  const ethanol = priceEthanol.value;
  const pricePetrol = document.getElementById('petrol');
  const petrol = pricePetrol.value;

  const img = document.getElementById('status');

  const operation = parseFloat(ethanol) / parseFloat(petrol);
  console.log(operation.toFixed(2));

  const theBestOption = document.getElementById('bestOption');
  const bestOption = ( 'R$' + (operation.toFixed(2)));
  theBestOption.innerHTML = bestOption;

  const theBestOptionSpan = document.getElementById('bestOptionSpan');
  const bestOptionSpan = ('best is:');
  theBestOptionSpan.innerHTML = bestOptionSpan;

  

  if (operation < 0.7) {
    img.src = 'etanol.png'
    console.log('Ethanol')
  } else
    img.src = 'gasolina.png'
  console.log('Petrol')
 

}

function Remove() {
  document.getElementById('form').reset();
}