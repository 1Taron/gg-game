import interfaces from "./node";
import delayImage from "../image/딜레이(passive).png"
import delayNImage from "../image/딜레이(Active).png"



class delay implements interfaces.node{
    inputNode: [string|null, boolean][] = [[null,true]];
    nextNode: [string, boolean][] = [];
    inputPivot: Array<{x:number,y:number}> = [];
    outputPivot: Array<{x:number,y:number}> = [];
    delay: number;
    nowImage: HTMLImageElement;
    activePath: string;
    nonActivePath: string;
    id: string;
    context: CanvasRenderingContext2D;
    position: { x: number; y: number; };


    constructor(x:number, y:number, ctx:CanvasRenderingContext2D ){
        this.id = crypto.randomUUID();
        this.nowImage = new Image();
        this.activePath = delayNImage;
        this.nonActivePath = delayImage;
        this.context = ctx;
        this.position = {x,y};
        this.delay = 1000;
        
    }

    drow: Function = ()=>{
        this.context.beginPath();
        this.context.drawImage(this.nowImage, this.position.x-interfaces.correction, this.position.y-interfaces.correction);
        this.context.closePath();
    };
    
    play: Function = ()=>{
        if(this.inputNode[0][1] == false) return;

        setTimeout(() => {
            this.nextNode.forEach(e=> {
                interfaces.nodes[e[0]].inputNode.forEach(e2=>{
                    if(e2[0] == this.id) e2[1] = true;
                });
                interfaces.nodes[e[0]].play();
            });
        }, this.delay);

    }

        
}