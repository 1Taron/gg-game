import interfaces from "./node";
import soundBlockAImage from "../image/noteblock(Active).png";
import soundBlockNImage from "../image/noteblock(passive).png";
import C from "../image/C.mp3";

class soundBlock1 implements interfaces.soundBlock{
    nowImage: HTMLImageElement;
    context: CanvasRenderingContext2D;
    position: { x: number; y: number; };
    inputNode: [string|null, boolean][] = [[null,true]];
    nextNode: [string, boolean][] = [];
    delay: number = 100;
    activePath: string;
    nonActivePath: string;
    id:string;
    soundPath:string;
    inputPivot:Array<{x:number,y:number}> = [];
    outputPivot:Array<{x:number,y:number}> = [];
    soundRate: number = 1;

    constructor(x:number, y:number, ctx:CanvasRenderingContext2D){
        this.id = crypto.randomUUID();
        interfaces.nodes[this.id] = this;
        this.position = {x, y};
        this.context = ctx;
        this.nowImage = new Image();
        this.activePath = soundBlockAImage;
        this.nonActivePath = soundBlockNImage;
        this.nowImage.src = this.activePath;
        this.soundPath = C;
        this.inputPivot = [
            {x:this.position.x-interfaces.correction, y:this.position.y},
        ]
        this.outputPivot = [
            {x:this.position.x+interfaces.correction, y:this.position.y}
        ]
        interfaces.startNode = this;

    }
    inputCount: number = 1;


    drow: Function = ()=>{
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
            this.context.stroke();
        }
        this.context.closePath();
    };

    play: Function = ()=>{
        if(this.inputNode[0][1] == false) return;

        let size = interfaces.audioList.length;
        let audio:HTMLAudioElement = interfaces.audioList[0];
        for(let i = 0; i < size; ++i){
            if(interfaces.audioList[i].src == ""){
                audio = interfaces.audioList[i];
                audio.playbackRate = this.soundRate;
                audio.src = this.soundPath;
                audio.play();
            }
            break;
        }
        this.nowImage.src = this.activePath;
        setTimeout(() => {
            audio.pause();
            audio.src = "";
            this.nextNode.forEach(e=> {
                if(e[0] != null){
                    this.nowImage.src = this.nonActivePath;
                    interfaces.nodes[e[0]].inputNode.forEach(e2=>{
                        if(e2[0] == this.id) e2[1] = true;
                    });
                    interfaces.nodes[e[0]].play();
                }
            });
        }, this.delay);
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
        if(x > 0 && x < 100  &&  y > 0 && y < 25){
            interfaces.nodeid=this.id;
        }
        else if(x > 0 && x < 100  &&  y > 25 && y < 70){
            this.inputNode.forEach(e => {
                if(e[0]!=null)
                    interfaces.nodes[e[0]].nextNode.filter(e2 => {
                        return e2[0] != this.id;
                    });
            });
            this.inputNode = [[null,true],[null,true]];
        }
        else if(x > 0 && x < 100  &&  y > 70 && y < 120){
            let temp = prompt("시간을 입력해주세요");
            if(temp != null)
                this.delay = Number.parseInt(temp);
        }
        else if(x > 0 && x < 100 && y > 120 && y < 160){
            let temp = prompt("피치를 입력해주세요");
            if(temp != null)
                this.soundRate = Number.parseInt(temp);
        }
        else if(x > 0 && x < 100 && y > 160 && y < 200){
            this.play();
        }

    };
    menuDraw: Function = () => {
        this.context.beginPath()
        this.context.fillStyle = 'white';
        this.context.fillRect(this.position.x,this.position.y,100,200);
        this.context.fillStyle = 'black';
        this.context.font = '20px sans-serif';
        this.context.fillText("노드 연결",this.position.x+5, this.position.y+20);
        this.context.fillText("연결 해제",this.position.x+5, this.position.y+60);
        this.context.fillText("시간 설정",this.position.x+5, this.position.y+100);
        this.context.fillText("피치 설정",this.position.x+5, this.position.y+140);
        this.context.fillText("시작",this.position.x+5, this.position.y+180)
    };
}

export default soundBlock1;