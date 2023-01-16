const cartButton = document.querySelector("[data-cart-button]")
const cartItemsWrapper = document.querySelector("[data-cart-items-wrapper]")

export function setupShoppingCart() {}


// Remove items from cart
// show/hide the cart button when it has no items or when it goes from 0 to 1 item
// persist across multiple pages
// calculate an accurate total
// handle multiple of the same item in the cart 


// show/hide the cart when clicked
cartButton.addEventListener('click', (e) =>{
    cartItemsWrapper.classList.toggle('invisible')
})

// Add items to cart
