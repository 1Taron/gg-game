import interfaces from "./node";
import BlockAImage from "../image/Xor.png"
import BlockNImage from "../image/Xor.png"

class xor implements interfaces.node{
    id: string;
    position: { x: number; y: number; };
    inputNode: [string | null, boolean][] = [[null, true],[null, true]];
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
        this.activePath = BlockAImage;
        this.nonActivePath = BlockAImage;
        this.nowImage.src = this.activePath;
        this.inputPivot = [
            {x:this.position.x-interfaces.correction, y:this.position.y+20},
            {x:this.position.x-interfaces.correction, y:this.position.y-20}
        ]
        this.outputPivot = [
            {x:this.position.x+interfaces.correction, y:this.position.y}
        ]
    }
    inputCount: number = 2;
    drow: Function = () => {
        this.context.beginPath();
        this.context.drawImage(this.nowImage, this.position.x-interfaces.correction, this.position.y-interfaces.correction);
        for(let i = 0; i < this.inputCount; ++i){
            if(this.inputNode[i][0] == null) continue;
            let dstart = interfaces.nodes[this.inputNode[i][0] as string].outputPivot[0];
            let endpoint = this.inputPivot[i];
            
            if(this.inputNode[i][1]) this.context.strokeStyle = 'red'
            else this.context.strokeStyle = 'blue';

            this.context.moveTo(dstart.x, dstart.y);
            this.context.lineTo(endpoint.x, endpoint.y);
            this.context.stroke();
        }
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
        console.log(interfaces.nodeid, this.id);
        if(interfaces.nodeid != ""){
            if(interfaces.nodeid == this.id){
                interfaces.nodeid = "";
            }
            else
            {
                console.log(this);
                let t = interfaces.nodes[interfaces.nodeid];
                for(let i = 0; i < this.inputCount; i++)
                {
                    if(this.inputNode[i][0] == null){
                        this.inputNode[i][0] = interfaces.nodeid;
                        t.nextNode.push([this.id,true]);
                        break;
                    }
                }
                interfaces.nodeid = "";
            }
        }
        else
            this.activeMenu = !this.activeMenu;
    };
    activeMenu: boolean = false;
    menuClick: Function = (x:number, y:number) => {
        console.log(x,y);
        if(x > 0 && x < 100  &&  y > 0 && y < 30){
            interfaces.nodeid=this.id;
        }
        else if(x > 0 && x < 100  &&  y > 30 && y < 70){
            this.inputNode.forEach(e => {
                if(e[0]!=null)
                    interfaces.nodes[e[0]].nextNode.filter(e2 => {
                        return e2[0] != this.id;
                    });
            });
            this.inputNode = [[null,true],[null,true]];
        }

    };
    menuDraw: Function = () => {
        this.context.beginPath()
        this.context.fillStyle = 'white';
        this.context.fillRect(this.position.x,this.position.y,100,70);
        this.context.fillStyle = 'black';
        this.context.font = '20px sans-serif';
        this.context.fillText("노드 연결",this.position.x+5, this.position.y+20);
        this.context.fillText("연결 해제",this.position.x+5, this.position.y+60);
    };
}

export default xor;