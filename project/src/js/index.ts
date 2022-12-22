import css from "../css/style.css";
import img from "../image/ic_launcher.png";
import index from "../html/index.html";
import interfaces from "./node";


const continer = document.querySelector('#container') as HTMLDivElement;
const canvas = document.querySelector('#continer') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

canvas.width = continer.clientWidth;
canvas.height = continer.clientHeight;



console.log(css, img, index);
