"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const style_css_1 = __importDefault(require("../css/style.css"));
const ic_launcher_png_1 = __importDefault(require("../image/ic_launcher.png"));
const index_html_1 = __importDefault(require("../html/index.html"));
const continer = document.querySelector('#container');
const canvas = document.querySelector('#continer');
const ctx = canvas.getContext('2d');
const audio = document.querySelector('#audio');
canvas.width = continer.clientWidth;
canvas.height = continer.clientHeight;
console.log(style_css_1.default, ic_launcher_png_1.default, index_html_1.default);
