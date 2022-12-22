"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodeMenu_png_1 = __importDefault(require("../image/nodeMenu.png"));
const soundBlock_1 = __importDefault(require("./soundBlock"));
const delay_1 = __importDefault(require("./delay"));
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
            if (y > 60 && y < 96 && x > 4 && x > 40) {
            }
            else if (y > 41 && y < 81 && x > 52 && x < 81) {
                new soundBlock_1.default(this.position.x, this.position.y, this.ctx);
            }
            else if (y > 9 && y < 37 && x > 63 && x < 91) {
                new delay_1.default(this.position.x, this.position.y, this.ctx);
            }
        };
        this.ctx = ctx;
    }
}
exports.default = nodeMenu;
