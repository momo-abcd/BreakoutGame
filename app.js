import { MakeBlock } from './MakeBlock.js';



    const canvas = document.getElementsByTagName('canvas')[0];
    const ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.arc(50,300 ,10,0,Math.PI*2,false);

            ctx.fillStyle = "red";  //채울 색상
            ctx.fill(); //채우기

    const blockLayout = document.querySelector('.blockLayout');

    let blocks = new Array();
    for(let i=0;i<16;i++){
        blocks.push(new MakeBlock());
        blockLayout.appendChild(blocks[i].ret());
    }