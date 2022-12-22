import css from "../css/style.css";
import img from "../image/ic_launcher.png";
import other from "../html/other.html";
import index from "../html/index.html";
import loadComplite from "./loading";

let load = document.querySelector('#loadModule');
if(load != null){
    load.innerHTML = loadComplite;
}

console.log(css, other, img, index);
