
const products = [
    {
        id: "1",
        name: "AIR JORDAN 1 TRIPLE WHITE",
        price: 2500000,
        img1: "assets/img/AIR JORDAN 1 Triple White.jpg",
        img2: "assets/img/AIR JORDAN 1 Triple White_2.jpg"
    },
    {
        id: "2",
        name: "AIR JORDAN 1 TRIPLE RED ",
        price: 2500000,
        img1: "assets/img/AIR JORDAN 1 Triple White.jpg",
        img2: "assets/img/AIR JORDAN 1 Triple White_2.jpg"
    },
    {
        id:"3",
        name:"YEEZY BOOST 700 'WASH ORANGE'",
        price:2300000,
        img1:"https://bizweb.dktcdn.net/100/336/177/products/18-476439e5-2b31-47c1-a993-96bb5b80c360.jpg",
        img2:"https://bizweb.dktcdn.net/100/336/177/products/19-04f3da06-ae47-40d5-832b-cc9b2e53405e.jpg"
    },
    {
        id:"4",
        name:"AIR JORDAN 1 LOW 'ROYAL TOE'",
        price:1800000,
        img2:"https://bizweb.dktcdn.net/100/336/177/products/7-752595d9-bc09-4046-bfdd-b97d0100576b.jpg",
        img1:"https://bizweb.dktcdn.net/100/336/177/products/6-123beec2-f549-4086-a99f-06bc82c9e148.jpg"
    },
    {
        id:"5",
        name:"Dunk Low Bordeaux",
        price:2500000,
        img1:"https://bizweb.dktcdn.net/100/336/177/products/1-8271b70b-9204-4cd5-b5ee-d3edc34ef74c.jpg",
        img2:"https://bizweb.dktcdn.net/100/336/177/products/2-f1d35fd4-1b5b-4112-af78-580ca9333999.jpg"
    },
    {
        id:"6",
        name:"AIR FORCE 1 '07 ESSENTIALS 'BLACK PAISLEY'",
        price:1000000,
        img1:"https://bizweb.dktcdn.net/100/336/177/products/37.jpg",
        img2:"https://bizweb.dktcdn.net/100/336/177/products/37.jpg"
    }
]

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