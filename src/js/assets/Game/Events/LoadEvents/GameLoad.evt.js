import {config} from "../../../Config/Config.js";
import {getCookieValue, InsertCookie} from "../../../Cookie/Cookie.js";
import {ccScoreHtml, ccShop, ccShopItem} from "../../../HTML/html.js";
import {
    cc_Csps_exp,
    cc_Score_exp,
    cc_Cpc_exp,
    cc_ShopItems_exp,
    Error
} from "../../Variables/Variables.js"

export function LoadStats() { // Check if Cookies are vailable
    var cc_Score = cc_Score_exp();
    var cc_Cpc = cc_Cpc_exp();
    var cc_Csps = cc_Csps_exp();

    // Insert Values into the HTML Document
    $('#ccScoreCounter').html(cc_Score);
    $('#ccScoreCounterTypo').html((cc_Score > 1) ? 's' : '');

    $('#ccCounterPerSecond').html(cc_Csps);
    $('#ccCounterPerSecondTypo').html((cc_Csps > 1 || cc_Csps == 0) ? 's' : '');


}

export function LoadGame() { // Load Cookie Image
    const Cookie = new Image();
    $(Cookie).attr('src', "src/img/svg/cookie.svg")
    $(Cookie).attr('id', 'cc_Cookie');
    $(Cookie).css({
        'height': '200px',
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%,-50%)',
        'cursor': 'url("src/img/png/cursor/cookie.png"), auto',
        'transition': '.2s all'
    });
    $('#cc_wrap').append(Cookie);

    // Load Score Div
    $('#cc_wrap').append(ccScoreHtml());
}


export function LoadShop() {
    $('#cc_wrap').append(ccShop());
    LoadShopItems();
}

export function LoadShopItems() {
    var ShopItems = cc_ShopItems_exp();
    if (ShopItems["AutoClicker"].Status === 1 && $('#AutoClicker').length === 0) {
        ccShopItem('AutoClicker', parseInt(ShopItems["AutoClicker"].Price));
    }
    if (ShopItems["AutoClicker"].NextItem === 1 && $('#Grandma').length === 0) {
        ShopItems["Grandma"].Status = 1;
        ccShopItem('Grandma', parseInt(ShopItems["Grandma"].Price));
    }
    if (ShopItems["Grandma"].NextItem === 1 && $('#Wizard').length === 0) {
        ShopItems["Wizard"].Status = 1;
        ccShopItem('Wizard', parseInt(ShopItems["Wizard"].Price));
    }


    $('.ccShopItem').click(function () {
        var cc_Score = cc_Score_exp();
        var cc_Csps = cc_Csps_exp();

        let Name = $(this).attr('id');

        if (cc_Score >= ShopItems[Name].Price) {
            cc_Score -= + $(this).find('.ccShopItemPrice span').html();
            cc_Csps = + cc_Csps + config.Game[0].ShopConfig[0].DefaultValues[0].CspsValue;
            ShopItems[Name].Price = ShopItems[Name].Price * config.Game[0].ShopItems[0][Name].PriceIncrease;
            $(this).find('.ccShopItemPrice span').html(parseInt(ShopItems[Name].Price));
            ShopItems[Name].Count ++;

            InsertCookie('cc_ShopItems', JSON.stringify(ShopItems));
            InsertCookie('cc_Score', cc_Score);
            InsertCookie('cc_Csps', cc_Csps);

            if (ShopItems[Name].Count === ShopItems[Name].NextItemIncrease) {
                ShopItems[Name].NextItem = 1;
                InsertCookie('cc_ShopItems', JSON.stringify(ShopItems));
                LoadShopItems();
            }
        } else {
            Error("Not enough Cookies");
        }
    });
}
