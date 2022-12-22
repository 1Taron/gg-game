namespace interfaces{
    export const correction:number = 50;
    export const audioList = document.querySelectorAll('.audio') as NodeListOf<HTMLAudioElement>;
    export const audioContext = new AudioContext();
    export interface node{
        id:string,
        position:{x:number, y:number},
        play:Function,
        inputNode:Array<[string|null,boolean]>,
        nextNode:Array<[string,boolean]>,
        inputPivot:Array<{x:number,y:number}>,
        outputPivot:Array<{x:number,y:number}>,
        delay:number,
        drow:Function,
        context:CanvasRenderingContext2D,

        nowImage:HTMLImageElement,
        activePath:string,
        nonActivePath:string
    }
    
    export interface soundBlock extends node {
        soundPath:string,
        soundRate:number,
    }

    export interface register extends node{
        data:Array<[boolean]>
    }

    export let nodes:{[key:string]:any} = {};
}

export default interfaces;