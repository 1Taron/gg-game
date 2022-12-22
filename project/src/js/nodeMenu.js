"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodeMenu_png_1 = __importDefault(require("../image/nodeMenu.png"));
const nodeMenuImgElement = new Image();
nodeMenuImgElement.src = nodeMenu_png_1.default;
class nodeMenu {
    constructor(ctx) {
        this.aTime = new Date().getTime();
        this.position = { x: 0, y: 0 };
        this.Active = false;
        this.setTime = () => {
            this.aTime = new Date().getTime();
        };
        this.draw = () => {
            let dt = new Date().getTime() - this.aTime;
            if (dt > 150)
                dt = 150;
            this.ctx.drawImage(nodeMenuImgElement, this.position.x - 75, this.position.y - 75, dt, dt);
        };
        this.click = (x, y) => {
        };
        this.ctx = ctx;
    }
}
exports.default = nodeMenu;
