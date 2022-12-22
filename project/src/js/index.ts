import css from "../css/style.css";
import img from "../image/ic_launcher.png";
import index from "../html/index.html";


const continer = document.querySelector('#container') as HTMLDivElement;
const canvas = document.querySelector('#continer') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
const audio = document.querySelector('#audio');

canvas.width = continer.clientWidth;
canvas.height = continer.clientHeight;



console.log(css, img, index);
