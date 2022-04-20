const renderOrderItem = ()=>{
    var cart = getCartFromLocalStorage()
    if(!orderDetailList)//nếu element order detail list không tồn tại
        return
    orderDetailList.innerHTML = ''
    cart.forEach(item=>{
        let product = `
        <li id="order-item-${item.id}" class="order__item d-flex justify-content-between">
            <div class="order__item__img">
                <img src="${item.img1}" alt="">
                <div class="order__item__quanlity">
                    <span>${item.quanlity}</span>
                </div>
            </div>
            <div class="order__item__info">
                <div class="order__item__name">
                    <span>${item.name}
                </span> </div>
                <div class="order__item__size">
                    40
                </div>
            </div>
            <div class="order__item__price d-flex">
                <span style="margin: auto 0.125rem ;">${numWithCommas(item.price*item.quanlity)}đ</span>
            </div>
        </li>
        `
        orderDetailList.insertAdjacentHTML("beforeend",product)
    })
    updateInfoOrder()
}

const updateInfoOrder = ()=>{//cập nhật các chỉ số: số sản phẩm, tổng tiền trên order
    if(!orderDetail)
        return
    var cart = getCartFromLocalStorage()
    var countProduct = orderDetail.children[0].children[0]
    var tempTotal = orderDetail.children[2].getElementsByTagName('table')[0].children[1].children[0].children[1]
    var totalPayment = document.getElementById("total-payment")

    countProduct.innerText = `Đơn hàng (${cart.length} sản phẩm)`

    total = 0
    cart.forEach(item => {
        total += item.price * item.quanlity
    })

    tempTotal.innerText = `${numWithCommas(total)}đ`
    totalPayment.innerText = `${numWithCommas(total)}đ`
}

const toggleExpandOrderDetail = ()=>{
    var expand = document.getElementById("expand-order-detail")
    orderDetailList.classList.toggle("active")
    if(expand.children[0].classList.contains("bx-chevron-down")){
        expand.children[0].classList.remove("bx-chevron-down")
        expand.children[0].classList.add("bx-chevron-up")  
    }
    else if(expand.children[0].classList.contains("bx-chevron-up")){
        expand.children[0].classList.remove("bx-chevron-up")
        expand.children[0].classList.add("bx-chevron-down")  
    }
}
renderOrderItem()
