export const ccScoreHtml = () => {
    return `
        <div class="ccScore">
            <p>You have <span id="ccScoreCounter"></span> cookie<span id="ccScoreCounterTypo"></span></p>
            <p style="font-size: 0.9rem; text-align:center">You gain <span id="ccCounterPerSecond"></span> cookie<span id="ccCounterPerSecondTypo"></span> per Second</p>
        </div>
    `;
}

export var ccClickIndicator = (Id, Indicator, left, top) => {
    let style = document.createElement('style');
    let styles;
    styles = `@keyframes Indicator_${Id} {
        from{
            top: ${top}
        } 
        to{
            top: calc(${top} - 200px)
        }
    }`;
    style.appendChild(document.createTextNode(styles));
    style.id = "styleIndicator_" + Id

    $('head').append(style);
    return `
        <div class="ccClickIndicator" id="ccCI_${Id}" style="position: absolute; left: ${left}; top: ${top}; pointer-events: none; animation: Indicator_${Id} 3s ease-in-out; ">
            +<span id="ccClickIndicatorCount" style="font-weight: 900; font-size: 1.2rem">${Indicator}</span>
        </div>
    `;
}

export const ccShop = () => {
    return `
        <div class="ccShop">
            <header>
                <h1>Cookie Shop</h1>
            </header>
            <main></main>
        </div>   
    `
}

export var ccShopItem = (ShopItemName, ShopItemPrice) => {
    $('.ccShop main').append(`
        <div class="ccShopItem" id="${ShopItemName}">
            <div style="width: 50%; float: left; display: flex">
                <img class="ccShopItemImage" src="src/img/png/shop/${ShopItemName}.png">
                <div class="ccShopItemName">${ShopItemName}</div>
            </div>
            <div style="width: 50%; float: right;">
                <div class="ccShopItemPrice"><span>${ShopItemPrice}</span><img src="src/img/svg/cookie.svg"></div>
            </div>
        </div>
    `);
}
