function Calculate() {
  const priceEthanol = document.getElementById('ethanol');
  const ethanol = priceEthanol.value;
  const pricePetrol = document.getElementById('petrol');
  const petrol = pricePetrol.value;

  const img = document.getElementById('status');

  const operation = parseFloat(ethanol) / parseFloat(petrol);
  console.log(operation.toFixed(2));

  const theBestOption = document.getElementById('bestOption');
  const bestOption = (operation.toFixed(2));
  theBestOption.innerHTML = bestOption;

  if (operation < 0.7) {
    img.src = 'etanol.png'
    console.log('Ethanol')
  } else
    img.src = 'gasolina.png'
  console.log('Petrol')


}