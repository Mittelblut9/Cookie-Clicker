import {config} from '../Config/Config.js';
import {getCookieValue, InsertCookie} from '../Cookie/Cookie.js';
import {ccClickIndicator} from '../HTML/html.js';
import {LoadGame, LoadShop, LoadShopItems, LoadStats} from './Events/LoadEvents/GameLoad.evt.js';
import {
    cc_Score_exp,
    cc_Cpc_exp,
    cc_ClickSound_exp,
    cc_Csps_exp,
    Error,
    cc_ShopItems_exp
} from './Variables/Variables.js';

var cc_Score = cc_Score_exp();
var cc_Cpc = cc_Cpc_exp();
var cc_ClickSound = cc_ClickSound_exp();
var cc_Csps = cc_Csps_exp();
var IndicatorId = 0;
var ShopItems = cc_ShopItems_exp();

export function Game() {
    $(document).ready(function () {
        LoadGame();
        LoadShop();
        if (config.Game[0].ShopConfig[0].Interval === 1) {
            window.setInterval(PerSecond, 1000);
            window.setInterval(LoadStats, 100);
        }

        $('#cc_Cookie').click((e) => {
            cc_ClickSound.currentTime = 0;
            cc_ClickSound.play();

            cc_Score = + cc_Score + 1;

            InsertCookie('cc_Score', cc_Score);

            $('#cc_Cookie').css('height', '180px');
            setTimeout(() => {
                $('#cc_Cookie').css('height', '200px');
            }, 100);

            $('#cc_wrap').append(ccClickIndicator(IndicatorId, parseInt(cc_Cpc), e.clientX + 'px', e.clientY + 'px'));
            resetIndicator(IndicatorId);
            IndicatorId++;
        });

        function PerSecond() {
            (cc_Csps > 0) ? cc_Score = + cc_Score + (1 * cc_Csps) : '';
            InsertCookie('cc_Score', parseInt(cc_Score));
        }

        function resetIndicator(Id) {
            setTimeout(() => {
                $('#ccCI_' + Id).css({'transition': '.3s', 'opacity': '0'});
                setTimeout(() => {
                    $('#ccCI_' + Id).remove();
                    $('#styleIndicator_' + Id).remove();
                }, 300);
            }, 2000);
        }
    });
}
