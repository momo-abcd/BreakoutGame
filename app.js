    const canvas = document.getElementsByTagName('canvas')[0];
    console.log(canvas);
    const ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.arc(50,50 ,10,0,Math.PI*2,false);

            ctx.fillStyle = "red";  //채울 색상
            ctx.fill(); //채우기