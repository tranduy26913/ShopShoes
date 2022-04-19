const searchProduct = ()=>{
    if(location.pathname !== "/ShopShoes/search.html"){
        location.replace("search.html")
        
    }
    var productSearch = document.getElementById("product-search")
    productSearch.innerHTML=''
    var query = search.value
    i = Math.floor(Math.random() * 3)
    var result = products.slice(i,(i+3)%6)
    result.forEach(item=>{
        let product = `
        <div class="item col-lg-3 col-md-4 col-sm-6 col-12">
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
        productSearch.insertAdjacentHTML("beforeend", product)
    })
}

