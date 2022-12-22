import nodeMenuImg from "../image/nodeMenu.png";
import and from "./and";
import or from "./or";
import xor from "./xor";
import soundBlock1 from "./soundBlock";
import not from "./not";
import delay from "./delay";


const nodeMenuImgElement:HTMLImageElement = new Image();
nodeMenuImgElement.src = nodeMenuImg;
class nodeMenu{
    aTime:number = new Date().getTime();
    position:{x:number,y:number} = {x:0,y:0};
    Active:boolean = false;
    ctx:CanvasRenderingContext2D;

    constructor(ctx:CanvasRenderingContext2D){
        this.ctx = ctx;
    }

    setTime:()=>void = ()=>{
        this.aTime = new Date().getTime();
    }

    draw:()=>void = ()=>{
        let dt = new Date().getTime() - this.aTime;
        if(dt > 150) dt = 150
        this.ctx.drawImage(nodeMenuImgElement, this.position.x-75, this.position.y-75, dt, dt);
    }
    
    click:(x:number, y:number)=>void = (x:number, y:number)=>{
        if(y > 60 && y < 96 && x > 4 && x > 40){

        }
        else if(y > 41 && y < 81 && x > 52 && x < 81){
            new soundBlock1(this.position.x, this.position.y, this.ctx);
        }
        else if(y > 9 && y < 37 && x > 63 && x < 91){
            new delay(this.position.x, this.position.y, this.ctx);
        }
    }
}

export default nodeMenu;

