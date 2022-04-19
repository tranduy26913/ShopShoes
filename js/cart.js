
const renderCartMain = ()=>{
    var cart = getCartFromLocalStorage()
    var cartList = cartMain.children[1]
    cartList.innerHTML=''
    cart.forEach(item =>{
        let cartHTML = `
        <tr class="cart__item">
            <td id="cart-main-${item.id}">
                <div class="cart__item__img ">
                    <img src="${item.img1}" alt=" ">
                </div>
            </td>
            <td>
                <div class="d-flex justify-content-center align-items-center">
                    <a href="#" style="font-size:1rem;">${item.name}</a>
                </div>
            </td>
            <td>
                <div class="d-flex justify-content-center align-items-center">
                    <span style="font-size:1.125rem ;font-weight:700">${numWithCommas(item.price)}đ</span>
                </div>
            </td>
            <td>
                <div class="d-flex justify-content-center align-items-center">
                    <div data-id=${item.id} class="cart__item__quanlity">
                        <button onclick="decreaseQuanlity(event)">-</button>
                        <input value="${item.quanlity}" />
                        <button onclick="increaseQuanlity(event)">+</button>
                    </div>
                </div>
            </td>
            <td>
                <div class="d-flex justify-content-center align-items-center">
                    <span style="font-size:1.125rem ;font-weight:700">${item.quanlity * item.price}đ</span>
                </div>
            </td>
            <td>
                <div class="d-flex justify-content-center align-items-center">
                    <span style="font-size:1.875rem ;font-weight:400">
                    <i onclick="removeFromCart('${item.id}')" class='bx bxs-trash'></i>
                    </span>
                </div>
            </td>
        </tr>
        `
        cartList.insertAdjacentHTML("beforeend",cartHTML)
    })

}
