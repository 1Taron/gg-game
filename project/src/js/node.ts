namespace interfaces{
    interface node{
        position:{x:number, y:number},
        play:Function,
        inputNode:Array<[string,boolean]>,
        nextNode:Array<[string,boolean]>,
        delay:number,

        activePath:string,
        nonActivePath:string
    }
    
    interface soundBlock extends node {
        soundPath:string,
        soundFrequency:number
    }

    interface register extends node{
        data:Array<[boolean]>
    }
}

export default interfaces;