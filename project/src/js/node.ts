namespace interfaces{
    export const correction:number = 50;
    export const audioList = document.querySelectorAll('.audio');
    export interface node{
        id:string,
        position:{x:number, y:number},
        play:Function,
        inputNode:Array<[string,boolean]>,
        nextNode:Array<[string,boolean]>,
        inputPivot:Array<{x:number,y:number}>,
        outputPivot:Array<{x:number,y:number}>,
        delay:number,
        drow:Function,
        context:CanvasRenderingContext2D,

        nowImage:ImageBitmap,
        activePath:string,
        nonActivePath:string
    }
    
    export interface soundBlock extends node {
        soundPath:string,
        soundFrequency:number
    }

    export interface register extends node{
        data:Array<[boolean]>
    }
}

export default interfaces;