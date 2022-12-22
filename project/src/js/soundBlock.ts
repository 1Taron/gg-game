import interfaces from "./node";
import soundBlockAImage from "../image/노트블럭 (Active).png"
import soundBlockNImage from "../image/노트블럭 (passive).png"
import * as tone from 'tone';

class soundBlock implements interfaces.soundBlock{
    nowImage: HTMLImageElement;
    context: CanvasRenderingContext2D;
    position: { x: number; y: number; };
    inputNode: [string, boolean][];
    nextNode: [string, boolean][];
    delay: number;
    activePath: string;
    nonActivePath: string;
    id:string;
    soundPath:string;
    inputPivot:Array<{x:number,y:number}>;
    outputPivot:Array<{x:number,y:number}>;
    soundRate: number;
    sound: AudioBuffer;

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
        this.sound = new AudioBuffer(AudioBufferOption)
    }


    drow: Function = ()=>{
        this.context.beginPath();
        this.context.drawImage(this.nowImage, this.position.x-interfaces.correction, this.position.y-interfaces.correction);
        this.context.closePath();
    };

    play: Function = ()=>{
        interfaces.audioList.forEach(e => {
            const source = e.createBufferSource();
            source.buffer = 
        });
    }
}