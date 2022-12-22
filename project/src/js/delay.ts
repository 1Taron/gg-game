import interfaces from "./node";
import delayNImage from "../image/delay(passive).png"
import delayImage from "../image/delay(Active).png"



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
        this.inputPivot = [
            {x:this.position.x-interfaces.correction, y:this.position.y},
        ]
        this.outputPivot = [
            {x:this.position.x+interfaces.correction, y:this.position.y}
        ]
    }
    inputCount: number = 1;
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
        else if(x > 5 && x < 40  &&  y > 45 && y < 60){
            let temp = prompt("시간을 입력해주세요");
            if(temp != null)
                this.delay = Number.parseInt(temp);
        }
    };
    menuDraw: Function = () => {
        this.context.beginPath()
        this.context.fillStyle = 'white';
        this.context.fillRect(this.position.x,this.position.y,50,80);
        this.context.fillStyle = 'blcak';
        this.context.fillText("노드 연결",this.position.x+5, this.position.y+5);
        this.context.fillText("연결 해제",this.position.x+5, this.position.y+25);
        this.context.fillText("시간 설정",this.position.x+5, this.position.y+45);
    };
    drow: Function = () => {
        this.context.beginPath();
        this.context.drawImage(this.nowImage, this.position.x-interfaces.correction, this.position.y-interfaces.correction);
        for(let i = 0; i < this.inputCount; ++i){
            if(this.inputNode[i][0] == null) continue;
            let dstart = interfaces.nodes[this.inputNode[i][0] as string].outputPivot[0];
            let endpoint = this.inputPivot[0];
            
            if(this.inputNode[i][1]) this.context.strokeStyle = 'red'
            else this.context.strokeStyle = 'blue';

            this.context.moveTo(dstart.x, dstart.y);
            this.context.lineTo(endpoint.x, endpoint.y);
        }
        this.context.closePath();
    }
    
    play: Function = ()=>{
        if(this.inputNode[0][1] == false) return;
        this.nowImage.src = this.activePath;
        setTimeout(() => {
            this.nextNode.forEach(e=> {
                this.nowImage.src = this.nonActivePath;
                interfaces.nodes[e[0]].inputNode.forEach(e2=>{
                    if(e2[0] == this.id) e2[1] = true;
                });
                interfaces.nodes[e[0]].play();
            });
        }, this.delay);

    }
}

export default delay;