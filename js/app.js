
const cartHeader = document.getElementById("cart-header")
const productSpecial = document.getElementById("product-special")

let cart = localStorage.getItem("CART")
cart = JSON.parse(cart)
if (!cart)
    cart = []

const renderCartHeader = (cart) => {
    cartHeader.innerHTML = ''
    cart.forEach(item => {
        let product = `
        <li id="cart-header-${item.id}" class="header__cart__item" style="max-width: 540px;">
        <div class="d-flex">
            <div class="header__cart__img">
                <img src="${item.img1}" class="img-fluid rounded-start" alt="..." style="width:110px;height:110px">
            </div>
            <div class="header__cart__item__body">
                <h5 class="header__cart__item__title">YEEZY BOOST 700 'WASH ORANGE' - 40</h5>
                <p class="header__cart__item__price">${numWithCommas(item.price * item.quanlity)}đ</p>
                <div class="d-flex">
                    <div data-id=${item.id} class="header__cart__item__quanlity">
                        <button onclick="decreaseQuanlity(event)">-</button>
                        <input value="${item.quanlity}" />
                        <button onclick="increaseQuanlity(event)">+</button>
                    </div>
                </div>
            </div>
            <span class="header__cart__item__remove d-flex justify-content-center" style="width:40px">
            <i onclick="removeFromCart('${item.id}')" class='bx bxs-trash'></i>
            </span>
        </div>
    </li>
        `
        cartHeader.insertAdjacentHTML("beforeend", product)

    })
    totalPriceCart()
    setSizeCart()
}

renderCartHeader(cart)


const renderProductSpecial = () => {
    console.log(productSpecial)
    products.forEach(item => {
        let product = `
        <div class="item col-3">
                            <div class="item__thumbnail">
                                <img src="${item.img1}" alt="">
                                <img src="${item.img2}" alt="">
                            </div>
                            <div class="item__info">
                                <div class="item__name">
                                    ${item.name}
                                </div>
                                <div class="item__price">
                                    ${numWithCommas(item.price)}đ
                                </div>
                            </div>
                            <div class="item__button d-flex">
                                <button data-id="${item.id}" onclick="addToCart('${item.id}')" class="btn-primary btn-item">
                                    <span class="btn-item__txt">Chọn mua</span>
                                    <span class="btn-item__icon"><i class='bx bx-cart-add'></i></span>
                                </button>
                            </div>
    
                        </div>`
        productSpecial.insertAdjacentHTML("beforeend", product)
    })

}
renderProductSpecial()