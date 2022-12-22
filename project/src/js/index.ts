import css from "../css/style.css";
import img from "../image/ic_launcher.png";
import index from "../html/index.html";
import interfaces from "./node";
import nodeMenu from "./nodeMenu";

//import C from "../image/C.mp3";
//


const continer = document.querySelector('#container') as HTMLDivElement;
const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
const nM = new nodeMenu(ctx);

canvas.width = continer.clientWidth;
canvas.height = continer.clientHeight;

interfaces.audioList.forEach(e => {
    e.loop = true;
    e.preservesPitch = false;
});

const AllDraw:() => void = () => {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(const v of Object.values(interfaces.nodes)){
        v.drow();
        if(v.activeMenu) v.menuDraw();
    }
    if(nM.Active) nM.draw();
}

const nodeMenuEvent:(e:MouseEvent) => void = (e:MouseEvent) => {
    for(const v of Object.values(interfaces.nodes)){
        let tx:number = e.clientX - v.position.x;
        let ty:number = e.clientY - v.position.y;

        if(tx > -50 && tx < 50 && ty > -50 && ty < 50){
            v.click();
            return;
        }
        else if(v.activeMenu){
            v.menuClick(tx, ty);
            v.activeMenu = false;
            return;
        }
    }

    if(nM.Active){
        let tx:number = e.clientX - nM.position.x;
        let ty:number = e.clientY - nM.position.y;
        nM.click(tx,ty);
    }

    nM.position = {x:e.clientX, y:e.clientY};
    nM.Active = !nM.Active;
    nM.setTime();
}

canvas.addEventListener('click', nodeMenuEvent);
requestAnimationFrame(AllDraw);
console.log(css, img, index);
