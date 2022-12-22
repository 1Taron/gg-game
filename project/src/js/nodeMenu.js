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
        this.sumsum = 0;
        this.node2 = () => {
            this.nodeMenuImgElement.src = nodeMenu2_png_1.default;
            this.sumsum = 25;
        };
        this.node1 = () => {
            this.nodeMenuImgElement.src = nodeMenu_png_1.default;
            this.sumsum = 0;
        };
        this.setTime = () => {
            this.node1();
            this.bTime = 0;
            this.aTime = new Date().getTime();
        };
        this.draw = () => {
            let dt = new Date().getTime() - this.aTime;
            let tt = 0;
            if (this.bTime > 0) {
                tt = new Date().getTime() - this.bTime;
                if (tt > 50)
                    tt = 50;
            }
            if (dt > 150)
                dt = 150;
            this.ctx.drawImage(this.nodeMenuImgElement, this.position.x - (75 + this.sumsum), this.position.y - 75 - this.sumsum, dt + tt, dt + tt);
        };
        this.click = (x, y) => {
            console.log(x);
            console.log(y);
            if (this.bTime == 0) {
                if (y > 16 && y < 60 && x > -52 && x < -17) {
                    console.log("논리 눌림");
                    this.bTime = new Date().getTime();
                    this.node2();
                }
                else if (y > -5 && y < 32 && x > -1 && x < 52) {
                    console.log("사운드 눌림");
                    new soundBlock_1.default(this.position.x, this.position.y, this.ctx);
                    this.Active = false;
                }
                else if (y > -58 && y < -29 && x > 15 && x < 63) {
                    console.log("딜레이 눌림");
                    new delay_1.default(this.position.x, this.position.y, this.ctx);
                    this.Active = false;
                }
                else {
                    this.Active = false;
                }
            }
            else {
                if (y > -21 && y < 20 && x > -30 && x < 8) {
                    console.log("논리 눌림");
                    this.bTime = 0;
                    this.node1();
                }
                else if (y > -45 && y < -8 && x > 23 && x < 67) {
                    new soundBlock_1.default(this.position.x, this.position.y, this.ctx);
                    console.log("사운드 눌림");
                    this.Active = false;
                }
                else if (y > -80 && y < -50 && x > 37 && x < 69) {
                    new delay_1.default(this.position.x, this.position.y, this.ctx);
                    console.log("딜레이 눌림");
                    this.Active = false;
                }
                else if (y > 34 && y < 59 && x > -79 && x < -48) {
                    new not_1.default(this.position.x, this.position.y, this.ctx);
                    console.log("낫 눌림");
                    this.Active = false;
                }
                else if (y > 47 && y < 82 && x > -36 && x < -9) {
                    new and_1.default(this.position.x, this.position.y, this.ctx);
                    console.log("앤드 눌림");
                    this.Active = false;
                }
                else if (y > 48 && y < 81 && x > -6 && x < 23) {
                    new or_1.default(this.position.x, this.position.y, this.ctx);
                    console.log("오어 눌림");
                    this.Active = false;
                }
                else if (y > 37 && y < 59 && x > 29 && x < 66) {
                    new xor_1.default(this.position.x, this.position.y, this.ctx);
                    console.log("엑소 눌림");
                    this.Active = false;
                }
                else {
                    this.Active = false;
                }
            }
        };
        this.nodeMenuImgElement.src = nodeMenu_png_1.default;
        this.ctx = ctx;
    }
}
exports.default = nodeMenu;
