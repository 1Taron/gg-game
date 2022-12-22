import soundBlock1 from "./soundBlock";

namespace interfaces{
    export const correction:number = 50;
    export let nodeid:string="";
    export const audioList:Array<HTMLAudioElement> = [
        document.createElement('audio'),
        document.createElement('audio'),
        document.createElement('audio'),
        document.createElement('audio'),
        document.createElement('audio'),
        document.createElement('audio'),
        document.createElement('audio'),
        document.createElement('audio')
    ];
    export interface node{
        id:string,
        position:{x:number, y:number},
        play:Function,
        inputNode:Array<[string|null,boolean]>,
        nextNode:Array<[string|null,boolean]>,
        inputPivot:Array<{x:number,y:number}>,
        inputCount:number,
        outputPivot:Array<{x:number,y:number}>,
        delay:number,
        drow:Function,
        context:CanvasRenderingContext2D,

        click:Function,
        activeMenu:boolean,
        menuClick:Function,
        menuDraw:Function,

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

    export let nodes:{[key:string]:node|soundBlock|register} = {};

    export let startNode: soundBlock1|null = null;

}

export default interfaces;