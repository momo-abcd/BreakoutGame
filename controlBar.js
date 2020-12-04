const controlBar = document.getElementsByClassName('controlBar')[0];

document.addEventListener('keydown',moveBar);

function moveBar(e){
    console.log(e);
    switch(e.key){
        case 'ArrowLeft':
            controlBar.style.left="3px";
            break;
        case 'ArrowRight':
            break;
        default:
    }
}
