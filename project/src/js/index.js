"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const style_css_1 = __importDefault(require("../css/style.css"));
const ic_launcher_png_1 = __importDefault(require("../image/ic_launcher.png"));
const index_html_1 = __importDefault(require("../html/index.html"));
const node_1 = __importDefault(require("./node"));
const nodeMenu_1 = __importDefault(require("./nodeMenu"));
//import C from "../image/C.mp3";
//
const continer = document.querySelector('#container');
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const nM = new nodeMenu_1.default(ctx);
canvas.width = continer.clientWidth;
canvas.height = continer.clientHeight;
node_1.default.audioList.forEach(e => {
    e.loop = true;
    e.preservesPitch = false;
});
const AllDraw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const v of Object.values(node_1.default.nodes)) {
        v.drow();
        if (v.activeMenu)
            v.menuDraw();
    }
    if (nM.Active)
        nM.draw();
};
const nodeMenuEvent = (e) => {
    for (const v of Object.values(node_1.default.nodes)) {
        let tx = e.clientX - v.position.x;
        let ty = e.clientY - v.position.y;
        if (tx > -50 && tx < 50 && ty > -50 && ty < 50) {
            v.click();
            return;
        }
        else if (v.activeMenu) {
            v.menuClick(tx, ty);
            v.activeMenu = false;
            return;
        }
    }
    if (nM.Active) {
        let tx = e.clientX - nM.position.x;
        let ty = e.clientY - nM.position.y;
        nM.click(tx, ty);
    }
    nM.position = { x: e.clientX, y: e.clientY };
    nM.Active = !nM.Active;
    nM.setTime();
};
canvas.addEventListener('click', nodeMenuEvent);
requestAnimationFrame(AllDraw);
console.log(style_css_1.default, ic_launcher_png_1.default, index_html_1.default);
