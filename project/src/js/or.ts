import interfaces from "./node";
import BlockAImage from "../image/노트블럭 (Active).png"
import BlockNImage from "../image/노트블럭 (passive).png"

class soundBlock implements interfaces.node{
    id: string;
    position: { x: number; y: number; };
    inputNode: [string | null, boolean][] = [[null, true]];
    nextNode: [string | null, boolean][] = [];
    inputPivot: { x: number; y: number; }[] = [];
    outputPivot: { x: number; y: number; }[] = [];
    delay: number = 0;
    
    context: CanvasRenderingContext2D;
    nowImage: HTMLImageElement;
    activePath: string;
    nonActivePath: string;
    constructor(x:number, y:number, ctx:CanvasRenderingContext2D){
        this.id = crypto.randomUUID();
        interfaces.nodes[this.id] = this;
        this.position = {x, y};
        this.context = ctx;
        this.nowImage = new Image();
        this.activePath = BlockNImage;
        this.nonActivePath = BlockAImage;
        this.nowImage.src = this.activePath;
    }
    drow: Function = () => {
        this.context.beginPath();
        this.context.drawImage(this.nowImage, this.position.x-interfaces.correction, this.position.y-interfaces.correction);
        this.context.closePath();
    }
    play: Function = () => {
        let result:boolean = this.inputNode[0][1];

        this.inputNode.forEach(e=>{
            if(e[1]) result = true;
        });
        this.nextNode.forEach(e=> {
            if(e[0] != null){
                interfaces.nodes[e[0]].inputNode.forEach(e2=>{
                    if(e2[0] == this.id) e2[1] = result;
                });
                interfaces.nodes[e[0]].play();
            }
        });
    }
}