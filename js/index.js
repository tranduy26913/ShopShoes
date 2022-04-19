const increaseQuanlity = (event) => {
    var btnClick = event.target.parentElement
    var input = btnClick.getElementsByTagName("input")[0]
    var idProduct = btnClick.getAttribute("data-id")
    var cart = getCartFromLocalStorage()
    number = 1
    if (input) {
        index = cart.findIndex(e => e.id == idProduct)
        if (index >= 0) {
            cart[index].quanlity++
            input.value = cart[index].quanlity
        }
        else {
            let newItem = { id, quanlity: 1 }
            cart.push(newItem)
        }
        setCartToLocalStorage(cart)
        updateCart()
    }
}

const getCartFromLocalStorage = () => {
    let cart = localStorage.getItem("CART")
    cart = JSON.parse(cart)
    return cart ? cart : []
}

const setCartToLocalStorage = (cart) => {
    localStorage.setItem("CART", JSON.stringify(cart))
}

const decreaseQuanlity = (event) => {
    var cart = getCartFromLocalStorage()
    var btnClick = event.target.parentElement
    var input = btnClick.getElementsByTagName("input")[0]
    var idProduct = btnClick.getAttribute("data-id")
    if (input) {
        index = cart.findIndex(e => e.id == idProduct)
        if (index >= 0) {
            if (cart[index].quanlity > 1) {
                cart[index].quanlity--
            } else
                cart[index].quanlity = 1
            input.value = cart[index].quanlity
        }
        setCartToLocalStorage(cart)
        updateCart()
    }
}

const addToCart = (id) => {
    let cart = getCartFromLocalStorage()
    if (!cart) {
        cart = []
        index = products.findIndex(e => e.id === id)
        if (index > -1) {
            let newItem = { ...products[index], quanlity: 1 }
            cart.push(newItem)
        }
    }
    else {
        index = cart.findIndex(e => e.id === id)
        if (index >= 0) {
            cart[index].quanlity++
        }
        else {
            index = products.findIndex(e => e.id === id)
            if (index > -1) {
                let newItem = { ...products[index], quanlity: 1 }
                cart.push(newItem)
            }
        }
    }
    localStorage.setItem("CART", JSON.stringify(cart))
    updateCart()
}

const removeFromCart = (id) => {
    console.log(id)
    let cart = localStorage.getItem("CART")
    cart = JSON.parse(cart)
    if (!cart) {
        cart = []
    }
    else {
        cart = cart.filter(e => e.id !== id)
        console.log(cart)
        var item = document.getElementById(`cart-header-${id}`)
        if (item) item.remove()
        item = document.getElementById(`cart-main-${id}`)
        if (item) item.remove()
    }
    localStorage.setItem("CART", JSON.stringify(cart))
    updateCart()
}


const updateCart = () => {
    if(cartHeader)
        renderCartHeader()
    if(cartMain)
        renderCartMain()
    totalPriceCart()
    setSizeCart()
}

const totalPriceCart = () => {
    var cart = getCartFromLocalStorage()
    total = 0
    cart.forEach(item => {
        total += item.price * item.quanlity
    })
    if(totalCartHeader)
        totalCartHeader.innerText = numWithCommas(total) + "đ"
    if(totalCartMain)
        totalCartMain.innerText = numWithCommas(total) + "đ"
}
const setSizeCart = () => {
    var cart = getCartFromLocalStorage()
    sizeCart.innerText = `(${cart.length}) Sản phẩm`
}

const toggleNavbar = ()=>{
    navbar.classList.toggle("active")
}
updateCart()