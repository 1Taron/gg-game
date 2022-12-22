"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodeMenu_png_1 = __importDefault(require("../image/nodeMenu.png"));
const nodeMenu2_png_1 = __importDefault(require("../image/nodeMenu2.png"));
const and_1 = __importDefault(require("./and"));
const or_1 = __importDefault(require("./or"));
const xor_1 = __importDefault(require("./xor"));
const soundBlock_1 = __importDefault(require("./soundBlock"));
const not_1 = __importDefault(require("./not"));
const delay_1 = __importDefault(require("./delay"));
class nodeMenu {
    constructor(ctx) {
        this.nodeMenuImgElement = new Image();
        this.aTime = new Date().getTime();
        this.bTime = 0;
        this.position = { x: 0, y: 0 };
        this.Active = false;
        this.node2 = () => {
            this.nodeMenuImgElement.src = nodeMenu2_png_1.default;
        };
        this.node1 = () => {
            this.nodeMenuImgElement.src = nodeMenu_png_1.default;
        };
        this.setTime = () => {
            this.aTime = new Date().getTime();
        };
        this.draw = () => {
            let dt = new Date().getTime() - this.aTime;
            let tt = 0;
            if (this.bTime > 0) {
                tt = new Date().getTime() - this.bTime;
                if (tt > 150)
                    tt = 150;
            }
            if (dt > 150)
                dt = 150;
            this.ctx.drawImage(this.nodeMenuImgElement, this.position.x - 75, this.position.y - 75, dt, dt + tt);
        };
        this.click = (x, y) => {
            if (this.bTime == 0) {
                if (y > 60 && y < 96 && x > 4 && x > 40) {
                    this.bTime = new Date().getTime();
                    this.node2();
                }
                else if (y > 41 && y < 81 && x > 52 && x < 81) {
                    new soundBlock_1.default(this.position.x, this.position.y, this.ctx);
                }
                else if (y > 9 && y < 37 && x > 63 && x < 91) {
                    new delay_1.default(this.position.x, this.position.y, this.ctx);
                }
            }
            else {
                if (y > 77 && y < 124 && x > 66 && x < 109) {
                    this.bTime = 0;
                    this.node1();
                }
                else if (y > 59 && y < 98 && x > 124 && x < 166) {
                    new soundBlock_1.default(this.position.x, this.position.y, this.ctx);
                }
                else if (y > 14 && y < 47 && x > 136 && x < 173) {
                    new delay_1.default(this.position.x, this.position.y, this.ctx);
                }
                else if (y > 141 && y < 165 && x > 25 && x < 51) {
                    new not_1.default(this.position.x, this.position.y, this.ctx);
                }
                else if (y > 149 && y < 190 && x > 61 && x < 90) {
                    new and_1.default(this.position.x, this.position.y, this.ctx);
                }
                else if (y > 152 && y < 190 && x > 96 && x < 124) {
                    new or_1.default(this.position.x, this.position.y, this.ctx);
                }
                else if (y > 143 && y < 167 && x > 132 && x < 199) {
                    new xor_1.default(this.position.x, this.position.y, this.ctx);
                }
            }
        };
        this.nodeMenuImgElement.src = nodeMenu_png_1.default;
        this.ctx = ctx;
    }
}
exports.default = nodeMenu;
