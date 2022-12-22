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
        };
        this.menuDraw = () => {
            this.context.beginPath();
            this.context.fillStyle = 'white';
            this.context.fillRect(this.position.x, this.position.y, 50, 80);
            this.context.fillStyle = 'blcak';
            this.context.fillText("노드 연결", this.position.x + 5, this.position.y + 5);
            this.context.fillText("연결 해제", this.position.x + 5, this.position.y + 25);
            this.context.fillText("시간 설정", this.position.x + 5, this.position.y + 45);
        };
        this.drow = () => {
            this.context.beginPath();
            this.context.drawImage(this.nowImage, this.position.x - node_1.default.correction, this.position.y - node_1.default.correction);
            this.context.closePath();
        };
        this.play = () => {
            if (this.inputNode[0][1] == false)
                return;
            this.nowImage.src = this.activePath;
            setTimeout(() => {
                this.nextNode.forEach(e => {
                    this.nowImage.src = this.nonActivePath;
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
        this.activePath = ____passive__png_1.default;
        this.nonActivePath = ____Active__png_1.default;
        this.context = ctx;
        this.position = { x, y };
        this.delay = 1000;
    }
}
