"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("./node"));
const ______Active__png_1 = __importDefault(require("../image/\uB178\uD2B8\uBE14\uB7ED (Active).png"));
const ______passive__png_1 = __importDefault(require("../image/\uB178\uD2B8\uBE14\uB7ED (passive).png"));
class soundBlock {
    constructor(x, y, ctx) {
        this.inputNode = [[null, true]];
        this.nextNode = [];
        this.inputPivot = [];
        this.outputPivot = [];
        this.delay = 0;
        this.drow = () => {
            this.context.beginPath();
            this.context.drawImage(this.nowImage, this.position.x - node_1.default.correction, this.position.y - node_1.default.correction);
            this.context.closePath();
        };
        this.play = () => {
            let result = this.inputNode[0][1];
            for (let i = 1; i < this.inputNode.length; ++i) {
                if (this.inputNode[i][1] != result)
                    result = true;
                else
                    result = false;
            }
            this.nextNode.forEach(e => {
                if (e[0] != null) {
                    node_1.default.nodes[e[0]].inputNode.forEach(e2 => {
                        if (e2[0] == this.id)
                            e2[1] = result;
                    });
                    node_1.default.nodes[e[0]].play();
                }
            });
        };
        this.id = crypto.randomUUID();
        node_1.default.nodes[this.id] = this;
        this.position = { x, y };
        this.context = ctx;
        this.nowImage = new Image();
        this.activePath = ______passive__png_1.default;
        this.nonActivePath = ______Active__png_1.default;
        this.nowImage.src = this.activePath;
    }
}
