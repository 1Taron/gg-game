import nodeMenuImg from "../image/nodeMenu.png";
import nodeMenu2 from "../image/nodeMenu2.png";
import and from "./and";
import or from "./or";
import xor from "./xor";
import soundBlock1 from "./soundBlock";
import not from "./not";
import delay from "./delay";


class nodeMenu{
    nodeMenuImgElement:HTMLImageElement = new Image();
    aTime:number = new Date().getTime();
    bTime:number = 0;
    position:{x:number,y:number} = {x:0,y:0};
    Active:boolean = false;
    ctx:CanvasRenderingContext2D;

    constructor(ctx:CanvasRenderingContext2D){
        this.nodeMenuImgElement.src = nodeMenuImg;
        this.ctx = ctx;
    }
    
    node2:()=>void = ()=>{
        this.nodeMenuImgElement.src = nodeMenu2;
    }

    node1:()=>void = ()=> {
        this.nodeMenuImgElement.src = nodeMenuImg;
    }

    setTime:()=>void = ()=>{
        this.aTime = new Date().getTime();
    }

    draw:()=>void = ()=>{
        let dt = new Date().getTime() - this.aTime;
        let tt = 0;
        if(this.bTime > 0){
            tt = new Date().getTime() - this.bTime;
            if(tt > 50) tt = 50;
        }
        if(dt > 150) dt = 150
        this.ctx.drawImage(this.nodeMenuImgElement, this.position.x-75, this.position.y-75, dt+tt, dt+tt);
    }
    
    click:(x:number, y:number)=>void = (x:number, y:number)=>{
        console.log(x);
        console.log(y);
        if(this.bTime == 0){
            if(y > 60 && y < 96 && x > 4 && x > 40){
                console.log("논리 눌림");
                this.bTime = new Date().getTime();
                this.node2();
            }
            else if(y > 41 && y < 81 && x > 52 && x < 81){
                console.log("사운드 눌림");
                new soundBlock1(this.position.x, this.position.y, this.ctx);
            }
            else if(y > 9 && y < 37 && x > 63 && x < 91){
                console.log("딜레이 눌림");
                new delay(this.position.x, this.position.y, this.ctx);
            }
            else{
                this.Active = false;
            }
        }

        else{
            if(y > 77 && y < 124 && x > 66 && x < 109){
                console.log("논리 눌림");
                this.bTime = 0;
                this.node1();
            }
            else if(y > 59 && y< 98 && x > 124 && x < 166){
                new soundBlock1(this.position.x, this.position.y, this.ctx);
                console.log("사운드 눌림");
            }
            else if(y > 14 && y < 47 && x > 136 && x < 173){
                new delay(this.position.x, this.position.y, this.ctx);
                console.log("딜레이 눌림");
            }
            else if(y > 141 && y < 165 && x > 25 && x < 51){
                new not(this.position.x, this.position.y, this.ctx);
                console.log("낫 눌림");
            }
            else if(y > 149 && y < 190 && x > 61 && x < 90){
                new and(this.position.x, this.position.y, this.ctx);
                console.log("앤드 눌림");
            }
            else if(y > 152 && y < 190 && x > 96 && x < 124){
                new or(this.position.x, this.position.y, this.ctx);
                console.log("오어 눌림");
            }
            else if(y > 143 && y < 167 && x > 132 && x < 199){
                new xor(this.position.x, this.position.y, this.ctx);
                console.log("엑소 눌림");
            }
            else{
                this.Active = false;
            }
        }
    }
}

export default nodeMenu;

