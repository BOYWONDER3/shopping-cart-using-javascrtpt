import items from './items.json'
import formatCurrency from './util/formatCurrency'

const cartButton = document.querySelector("[data-cart-button]")
const cartItemsWrapper = document.querySelector("[data-cart-items-wrapper]")
let shoppingCart = []
const IMAGE_URL = 'https://dummyimage.com/210x130'
const cartItemTemplate = document.querySelector("#cart-item-template")
const cartItemContainer = document.querySelector('[data-cart-items]')
const cartQuantity = document.querySelector('[data-cart-quantity]')
const cartTotal = document.querySelector('[data-cart-total]')
const cart = document.querySelector('[data-cart]')


export function setupShoppingCart() {
    renderCart()
}


// Remove items from cart
// show/hide the cart button when it has no items or when it goes from 0 to 1 item
// persist across multiple pages
//



// show/hide the cart when clicked
cartButton.addEventListener('click', (e) =>{
    cartItemsWrapper.classList.toggle('invisible')
})

// Add items to cart
  // Handle Click Event for adding
  // handle multiple of the same item in the cart 
  // calculate an accurate total

 export function addToCart (id) {
    const existingItem = shoppingCart.find(entry => entry.id === id)
    if (existingItem) {
        existingItem.quantity++
    } else {
        shoppingCart.push({ id: id, quantity: 1 })
    }
    renderCart()
  }


  function removeFromCart(id) {
    const existingItem = shoppingCart.find(entry => entry.id === id)
    if (existingItem == null) return
    shoppingCart = shoppingCart.filter(entry => entry.id !== id)
    renderCart()
  }


  function renderCart() {
    if(shoppingCart.length === 0) {
        hideCart()
    } else{
        showCart()
        renderCartItems()
    }
  }

  function hideCart() {
    cart.classList.add('invisible')
    cartItemsWrapper.classList.add('invisible')
  }

  function showCart() {
    cart.classList.remove('invisible')
  }





function renderCartItems () {

    cartQuantity.innerText = shoppingCart.length

    const totalCents = shoppingCart.reduce((sum, entry) => {
        const item = items.find(i => entry.id === i.id)
        return sum + item.priceCents * entry.quantity
    }, 0)

    cartTotal.innerText = formatCurrency(totalCents / 100)

    cartItemContainer.innerHTML = ''
    shoppingCart.forEach(entry => {
        const item = items.find(i => entry.id === i.id)
        const cartItem = cartItemTemplate.content.cloneNode(true)

    const container = cartItem.querySelector("[data-item]")
    container.dataset.itemId = item.id

    const name = cartItem.querySelector("[data-name]")
    name.innerText = item.name

    const image = cartItem.querySelector("[data-image]")
    image.src = `${IMAGE_URL}/${item.imageColor}/${item.imageColor}`


    if(entry.quantity > 1) {
        const quantity = cartItem.querySelector("[data-quantity]")
    quantity.innerText = `x${entry.quantyity}`
    }

    const price = cartItem.querySelector("[data-price]")
    price.innerText = formatCurrency(item.priceCents * entry.quantity / 100)
    
    
    cartItemContainer.appendChild(cartItem)
    })
}