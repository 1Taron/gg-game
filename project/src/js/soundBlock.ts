import interfaces from "./node";


class soundBlock implements interfaces.soundBlock{
    nowImage: HTMLImageElement;
    context: CanvasRenderingContext2D;
    soundFrequency: number;
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

    drow: Function = ()=>{
        this.context.beginPath();
        this.context.drawImage(this.nowImage, this.position.x-interfaces.correction, this.position.y-interfaces.correction);
        this.context.closePath();
    };

    play: Function = ()=>{
    }
}