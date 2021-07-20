import {config} from "../../Config/Config.js";
import {getCookieValue, InsertCookie} from "../../Cookie/Cookie.js";

export function cc_Score_exp() {
    (getCookieValue("cc_Score") === '') ? InsertCookie('cc_Score', config.Game[0].ShopConfig[0].DefaultValues[0].Score) : '';
    return parseInt(getCookieValue("cc_Score"));
}
// Cookies per Click
export function cc_Cpc_exp() {
    (getCookieValue("cc_Cpc") === '') ? InsertCookie('cc_Cpc', config.Game[0].ShopConfig[0].DefaultValues[0].Cpc) : '';
    return round(getCookieValue("cc_Cpc"), 1);
}
// Cookies per Second
export function cc_Csps_exp() {
    (getCookieValue("cc_Csps") === '') ? InsertCookie('cc_Csps', config.Game[0].ShopConfig[0].DefaultValues[0].Csps) : '';
    return round(getCookieValue("cc_Csps"), 1);
}
export function cc_ClickSound_exp() {
    let Sound = new Audio('src/mp3/Cookie_Clicker.mp3');
    Sound.volume = 0.4;
    return Sound;
}
export function cc_ShopItems_exp() {
    (getCookieValue("cc_ShopItems") == '') ? InsertCookie('cc_ShopItems', JSON.stringify(config.Game[0].ShopItems[0])) : '';
    return JSON.parse(getCookieValue("cc_ShopItems"));
}
export function Error(message) {
    (config.Game[0].ShopConfig[0].Debug === 1) ? console.error(message) : '';
}
// Rounds up to x decimal places
export const round = (wert, dez) => {
    wert = parseFloat(wert);
    if (!wert) {
        return 0;
    }

    dez = parseInt(dez);
    if (!dez) {
        dez = 0;
    }
    var umrechnungsfaktor = Math.pow(10, dez);
    return Math.round(wert * umrechnungsfaktor) / umrechnungsfaktor;
}
