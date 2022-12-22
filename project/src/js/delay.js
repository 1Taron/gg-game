"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("./node"));
const ____passive__png_1 = __importDefault(require("../image/\uB51C\uB808\uC774(passive).png"));
const ____Active__png_1 = __importDefault(require("../image/\uB51C\uB808\uC774(Active).png"));
class delay {
    constructor(x, y, ctx) {
        this.inputNode = [[null, true]];
        this.nextNode = [];
        this.inputPivot = [];
        this.outputPivot = [];
        this.drow = () => {
            this.context.beginPath();
            this.context.drawImage(this.nowImage, this.position.x - node_1.default.correction, this.position.y - node_1.default.correction);
            this.context.closePath();
        };
        this.play = () => {
            if (this.inputNode[0][1] == false)
                return;
            setTimeout(() => {
                this.nextNode.forEach(e => {
                    node_1.default.nodes[e[0]].inputNode.forEach(e2 => {
                        if (e2[0] == this.id)
                            e2[1] = true;
                    });
                    node_1.default.nodes[e[0]].play();
                });
            }, this.delay);
        };
        this.id = crypto.randomUUID();
        this.nowImage = new Image();
        this.activePath = ____Active__png_1.default;
        this.nonActivePath = ____passive__png_1.default;
        this.context = ctx;
        this.position = { x, y };
        this.delay = 1000;
    }
}
