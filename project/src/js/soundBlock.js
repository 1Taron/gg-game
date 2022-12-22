"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("./node"));
const ______Active__png_1 = __importDefault(require("../image/\uB178\uD2B8\uBE14\uB7ED (Active).png"));
const ______passive__png_1 = __importDefault(require("../image/\uB178\uD2B8\uBE14\uB7ED (passive).png"));
class soundBlock1 {
    constructor(x, y, ctx) {
        this.inputNode = [[null, true]];
        this.nextNode = [];
        this.delay = 100;
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
            this.nowImage.src = this.activePath;
            setTimeout(() => {
                audio.pause();
                audio.src = "";
                this.nextNode.forEach(e => {
                    if (e[0] != null) {
                        this.nowImage.src = this.nonActivePath;
                        node_1.default.nodes[e[0]].inputNode.forEach(e2 => {
                            if (e2[0] == this.id)
                                e2[1] = true;
                        });
                        node_1.default.nodes[e[0]].play();
                    }
                });
            }, this.delay);
        };
        this.click = () => {
            this.activeMenu = !this.activeMenu;
        };
        this.activeMenu = false;
        this.menuClick = (x, y) => {
            if (x > 5 && x < 40 && y > 5 && y < 25) {
                node_1.default.nodeid = this.id;
            }
            else if (x > 5 && x < 40 && y > 25 && y < 40) {
                this.inputNode.forEach(e => {
                    if (e[0] != null)
                        node_1.default.nodes[e[0]].nextNode.filter(e2 => {
                            return e2[0] != this.id;
                        });
                });
                this.inputNode = [];
            }
            else if (x > 5 && x < 40 && y > 45 && y < 60) {
                let temp = prompt("시간을 입력해주세요");
                if (temp != null)
                    this.delay = Number.parseInt(temp);
            }
            else if (x > 5 && x < 40 && y > 65 && y < 80) {
                let temp = prompt("피치를 입력해주세요");
                if (temp != null)
                    this.soundRate = Number.parseInt(temp);
            }
        };
        this.menuDraw = () => {
            this.context.beginPath();
            this.context.fillStyle = 'white';
            this.context.fillRect(this.position.x, this.position.y, 50, 100);
            this.context.fillStyle = 'blcak';
            this.context.fillText("노드 연결", this.position.x + 5, this.position.y + 5);
            this.context.fillText("연결 해제", this.position.x + 5, this.position.y + 25);
            this.context.fillText("시간 설정", this.position.x + 5, this.position.y + 45);
            this.context.fillText("피치 설정", this.position.x + 5, this.position.y + 65);
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
exports.default = soundBlock1;
