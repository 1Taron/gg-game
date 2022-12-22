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
        this.delay = 0.1;
        this.inputPivot = [];
        this.outputPivot = [];
        this.soundRate = 1;
        this.drow = () => {
            this.context.beginPath();
            this.context.drawImage(this.nowImage, this.position.x - node_1.default.correction, this.position.y - node_1.default.correction);
            this.context.closePath();
        };
        this.play = () => {
            if (this.inputNode[0][1] == false)
                return;
            let size = node_1.default.audioList.length;
            let audio = node_1.default.audioList[0];
            for (let i = 0; i < size; ++i) {
                if (node_1.default.audioList[i].src == "") {
                    audio = node_1.default.audioList[i];
                    audio.playbackRate = this.soundRate;
                    audio.src = this.soundPath;
                    audio.play();
                }
                break;
            }
            setTimeout(() => {
                audio.pause();
                audio.src = "";
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
        node_1.default.nodes[this.id] = this;
        this.position = { x, y };
        this.context = ctx;
        this.nowImage = new Image();
        this.activePath = ______passive__png_1.default;
        this.nonActivePath = ______Active__png_1.default;
        this.nowImage.src = this.activePath;
        this.soundPath = "./base/drum";
    }
}
