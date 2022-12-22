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
    sumsum: number = 0;

    constructor(ctx:CanvasRenderingContext2D){
        this.nodeMenuImgElement.src = nodeMenuImg;
        this.ctx = ctx;
    }
    
    node2:()=>void = ()=>{
        this.nodeMenuImgElement.src = nodeMenu2;
        this.sumsum = 25;
    }

    node1:()=>void = ()=> {
        this.nodeMenuImgElement.src = nodeMenuImg;
        this.sumsum = 0;
    }

    setTime:()=>void = ()=>{
        this.node1();
        this.bTime = 0;
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
        this.ctx.drawImage(this.nodeMenuImgElement, this.position.x-(75+this.sumsum), this.position.y-75-this.sumsum, dt+tt, dt+tt);
    }
    
    click:(x:number, y:number)=>void = (x:number, y:number)=>{
        console.log(x);
        console.log(y);
        if(this.bTime == 0){
            if(y > 16 && y < 60 && x > -52 && x < -17){
                console.log("논리 눌림");
                this.bTime = new Date().getTime();
                this.node2();
            }
            else if(y > -5 && y < 32 && x > -1 && x < 52){
                console.log("사운드 눌림");
                new soundBlock1(this.position.x, this.position.y, this.ctx);
                this.Active = false;
            }
            else if(y > -58 && y < -29 && x > 15 && x < 63){
                console.log("딜레이 눌림");
                new delay(this.position.x, this.position.y, this.ctx);
                this.Active = false;
            }
            else{
                this.Active = false;
            }
        }

        else{
            if(y > -21 && y < 20 && x > -30 && x < 8){
                console.log("논리 눌림");
                this.bTime = 0;
                this.node1();
            }
            else if(y > -45 && y< -8 && x > 23 && x < 67){
                new soundBlock1(this.position.x, this.position.y, this.ctx);
                console.log("사운드 눌림");
                this.Active = false;
            }
            else if(y > -80 && y < -50 && x > 37 && x < 69){
                new delay(this.position.x, this.position.y, this.ctx);
                console.log("딜레이 눌림");
                this.Active = false;
            }
            else if(y > 34 && y < 59 && x > -79 && x < -48){
                new not(this.position.x, this.position.y, this.ctx);
                console.log("낫 눌림");
                this.Active = false;
            }
            else if(y > 47 && y < 82 && x > -36 && x < -9){
                new and(this.position.x, this.position.y, this.ctx);
                console.log("앤드 눌림");
                this.Active = false;
            }
            else if(y > 48 && y < 81 && x > -6 && x < 23){
                new or(this.position.x, this.position.y, this.ctx);
                console.log("오어 눌림");
                this.Active = false;
            }
            else if(y > 37 && y < 59 && x > 29 && x < 66){
                new xor(this.position.x, this.position.y, this.ctx);
                console.log("엑소 눌림");
                this.Active = false;
            }
            else{
                this.Active = false;
            }
        }
    }
}

export default nodeMenu;

