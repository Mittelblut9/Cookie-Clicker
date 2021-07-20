import {Error} from "../Game/Variables/Variables.js";

export function InsertCookie(name, value) {
    if(value === undefined) Error(name + " could not loaded");
    var a = new Date();
    a = new Date(a.getTime() + 1000 * 60 * 60 * 24 * 365); // Valid for 1 year
    document.cookie = name + '=' + value + ';expires=' + a.toGMTString() + ';';
}

export function getCookieValue(a) {
    if(a === undefined) Error(a + " could not loaded");
    const b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}