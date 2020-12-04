export class MakeBlock{
    constructor(){
        this.block = document.createElement('span');
        this.block.style.position='absolute';
        this.block.style.backgroundColor='#099EE2;';
        this.block.style=`
        background-color:#099EE2;
        width:110px;
        height:30px;
        `;
    }

    ret(){
        return this.block;
    }
}