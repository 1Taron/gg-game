import interfaces from "./node";
import BlockAImage from "../image/노트블럭 (Active).png"
import BlockNImage from "../image/노트블럭 (passive).png"

class xor implements interfaces.node{
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

        for(let i = 1 ; i < this.inputNode.length; ++i){
            if(this.inputNode[i][1] != result) result = true;
            else result = false;
        }
        this.nextNode.forEach(e=> {
            if(e[0] != null){
                interfaces.nodes[e[0]].inputNode.forEach(e2=>{
                    if(e2[0] == this.id) e2[1] = result;
                });
                interfaces.nodes[e[0]].play();
            }
        });
    }
    click: Function = () => {
        this.activeMenu = !this.activeMenu;
    };
    activeMenu: boolean = false;
    menuClick: Function = (x:number, y:number) => {
        if(x > 5 && x < 40  &&  y > 5 && y < 25){
            interfaces.nodeid=this.id;
        }
        else if(x > 5 && x < 40  &&  y > 25 && y < 40){
            this.inputNode.forEach(e => {
                if(e[0]!=null)
                    interfaces.nodes[e[0]].nextNode.filter(e2 => {
                        return e2[0] != this.id;
                    });
            });
            this.inputNode = [];
        }
    };
    menuDraw: Function = () => {
        this.context.beginPath()
        this.context.fillStyle = 'white';
        this.context.fillRect(this.position.x,this.position.y,50,40);
        this.context.fillStyle = 'blcak';
        this.context.fillText("노드 연결",this.position.x+5, this.position.y+5);
        this.context.fillText("연결 해제",this.position.x+5, this.position.y+25);
    };
}

export default xor;