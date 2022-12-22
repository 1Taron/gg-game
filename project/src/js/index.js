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
const continer = document.querySelector('#container');
const canvas = document.querySelector('#continer');
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
    }
    if (nM.Active)
        nM.draw();
};
const nodeMenuEvent = (e) => {
    for (const v of Object.values(node_1.default.nodes)) {
        let tx = e.clientX - v.position.x;
        let ty = e.clientY - v.position.y;
    }
    nM.position = { x: e.clientX, y: e.clientY };
    nM.Active = !nM.Active;
    nM.setTime();
};
canvas.addEventListener('click', nodeMenuEvent);
requestAnimationFrame(AllDraw);
console.log(style_css_1.default, ic_launcher_png_1.default, index_html_1.default);
