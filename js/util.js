const numWithCommas =(num)=> num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")

const getCartFromLocalStorage = () => {
    let cart = localStorage.getItem("CART")
    cart = JSON.parse(cart)
    return cart ? cart : []
}

const setCartToLocalStorage = (cart) => {
    localStorage.setItem("CART", JSON.stringify(cart))
}