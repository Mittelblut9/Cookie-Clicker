import {config} from "../Config/Config.js";

export function ShowAuthorInformation() {
    (config.ShowInformation) ? console.log(config.Information[0]) : '';
}
