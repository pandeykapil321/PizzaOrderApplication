const form = document.querySelector('form')
// all inputs
const customer = document.querySelector('#name')
const size = document.querySelectorAll('[name="size"]')
const toppings = document.querySelectorAll('input[type="checkbox"]')
const delivery = document.querySelector('#delivery')
const order_price = document.querySelector('#price')

const pizzaOrder = () => {
  let customerName = customer.value
  let sizeResult = ''
  let toppingsResult = []
  let price = 0;
  let deliveryResult = delivery.options[delivery.selectedIndex].value


  size.forEach(item => {
    if (item.checked) {
      sizeResult = item.id
    }
  })

  switch (sizeResult) {
    case 'forTwo':
      price += 7.50;
      break;
    case 'forFour':
      price += 10.50;
      break;
    case 'forSix':
      price += 12.50;
      break;
    case 'forEight':
      price += 15.50;
      break;
  };

  toppings.forEach(item => {
    if (item.checked) {
      toppingsResult.push(item.value)
    }
  })
  if (toppingsResult.length > 4) {
    price += (toppingsResult.length - 4) * 0.50
  }

  if (deliveryResult === "home") {
    price += 5
  }

  order_price.textContent = price.toFixed(2)
}

form.addEventListener('input', pizzaOrder)
// document.getElementById('PizaOrderForm').addEventListener('input', pizzaOrder)