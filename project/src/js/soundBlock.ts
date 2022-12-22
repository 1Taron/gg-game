import interfaces from "./node";
import soundBlockAImage from "../image/노트블럭 (Active).png"
import soundBlockNImage from "../image/노트블럭 (passive).png"

class soundBlock implements interfaces.soundBlock{
    nowImage: HTMLImageElement;
    context: CanvasRenderingContext2D;
    position: { x: number; y: number; };
    inputNode: [string|null, boolean][] = [[null,true]];
    nextNode: [string, boolean][] = [];
    delay: number = 0.1;
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
        this.activePath = soundBlockNImage;
        this.nonActivePath = soundBlockAImage;
        this.nowImage.src = this.activePath;
        this.soundPath = "./base/drum";
    }


    drow: Function = ()=>{
        this.context.beginPath();
        this.context.drawImage(this.nowImage, this.position.x-interfaces.correction, this.position.y-interfaces.correction);
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
        setTimeout(() => {
            audio.pause();
            audio.src = "";

        }, this.delay);
    }
}