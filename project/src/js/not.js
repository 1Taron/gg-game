"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("./node"));
const not_png_1 = __importDefault(require("../image/not.png"));
const noteblock_passive__png_1 = __importDefault(require("../image/noteblock(passive).png"));
class not {
    constructor(x, y, ctx) {
        this.inputNode = [[null, true]];
        this.nextNode = [];
        this.inputPivot = [];
        this.outputPivot = [];
        this.delay = 0;
        this.inputCount = 1;
        this.drow = () => {
            this.context.beginPath();
            this.context.drawImage(this.nowImage, this.position.x - node_1.default.correction, this.position.y - node_1.default.correction);
            for (let i = 0; i < this.inputCount; ++i) {
                if (this.inputNode[i][0] == null)
                    continue;
                let dstart = node_1.default.nodes[this.inputNode[i][0]].outputPivot[0];
                let endpoint = this.inputPivot[0];
                if (this.inputNode[i][1])
                    this.context.strokeStyle = 'red';
                else
                    this.context.strokeStyle = 'blue';
                this.context.moveTo(dstart.x, dstart.y);
                this.context.lineTo(endpoint.x, endpoint.y);
                this.context.stroke();
            }
            this.context.closePath();
        };
        this.play = () => {
            this.nextNode.forEach(e => {
                if (e[0] != null) {
                    node_1.default.nodes[e[0]].inputNode.forEach(e2 => {
                        if (e2[0] == this.id)
                            e2[1] = !e2[1];
                    });
                    node_1.default.nodes[e[0]].play();
                }
            });
        };
        this.click = () => {
            console.log(node_1.default.nodeid, this.id);
            if (node_1.default.nodeid != "") {
                if (node_1.default.nodeid == this.id) {
                    node_1.default.nodeid = "";
                }
                else {
                    console.log(this);
                    let t = node_1.default.nodes[node_1.default.nodeid];
                    for (let i = 0; i < this.inputCount; i++) {
                        if (this.inputNode[i][0] == null) {
                            this.inputNode[i][0] = node_1.default.nodeid;
                            t.nextNode.push([this.id, true]);
                            break;
                        }
                    }
                    node_1.default.nodeid = "";
                }
            }
            else
                this.activeMenu = !this.activeMenu;
        };
        this.activeMenu = false;
        this.menuClick = (x, y) => {
            console.log(x, y);
            if (x > 0 && x < 100 && y > 0 && y < 25) {
                node_1.default.nodeid = this.id;
            }
            else if (x > 0 && x < 100 && y > 25 && y < 70) {
                this.inputNode.forEach(e => {
                    if (e[0] != null)
                        node_1.default.nodes[e[0]].nextNode.filter(e2 => {
                            return e2[0] != this.id;
                        });
                });
                this.inputNode = [[null, true]];
            }
        };
        this.menuDraw = () => {
            this.context.beginPath();
            this.context.fillStyle = 'white';
            this.context.fillRect(this.position.x, this.position.y, 100, 70);
            this.context.fillStyle = 'black';
            this.context.font = '20px sans-serif';
            this.context.fillText("노드 연결", this.position.x + 5, this.position.y + 20);
            this.context.fillText("연결 해제", this.position.x + 5, this.position.y + 60);
        };
        this.id = crypto.randomUUID();
        node_1.default.nodes[this.id] = this;
        this.position = { x, y };
        this.context = ctx;
        this.nowImage = new Image();
        this.activePath = not_png_1.default;
        this.nonActivePath = noteblock_passive__png_1.default;
        this.nowImage.src = this.activePath;
        this.inputPivot = [
            { x: this.position.x - node_1.default.correction, y: this.position.y }
        ];
        this.outputPivot = [
            { x: this.position.x + node_1.default.correction, y: this.position.y }
        ];
    }
}
exports.default = not;
