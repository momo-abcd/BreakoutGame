import { MakeBlock } from './MakeBlock.js';
import { Ball } from './ball.js';
import { ControlBar } from './controlBar.js';



const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');


const ball = new Ball(ctx);
const controlBar = new ControlBar(ctx);

document.addEventListener("keydown",controlBar.keyDownHandler.bind(controlBar));
document.addEventListener("keyup",controlBar.keyUpHandler.bind(controlBar));



window.requestAnimationFrame(draw);

function draw() {
    ctx.clearRect(0,0,500,500);
    ball.draw();
    controlBar.draw();
    window.requestAnimationFrame(draw);
}