"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const style_css_1 = __importDefault(require("../css/style.css"));
const ic_launcher_png_1 = __importDefault(require("../image/ic_launcher.png"));
const other_html_1 = __importDefault(require("../html/other.html"));
const index_html_1 = __importDefault(require("../html/index.html"));
const loading_1 = __importDefault(require("./loading"));
let load = document.querySelector('#loadModule');
if (load != null) {
    load.innerHTML = loading_1.default;
}
console.log(style_css_1.default, other_html_1.default, ic_launcher_png_1.default, index_html_1.default);
