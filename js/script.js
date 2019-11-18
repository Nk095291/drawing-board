
board.addEventListener("mousedown",set);
board.addEventListener("mousemove",move);
board.addEventListener("mouseup",unset);
let didmove = true;
function set(e)
{
    hideMenu();
    isMenuDisplay = false
    isDown=true;  
    ctx.beginPath();
    ctx.moveTo(event.clientX-dim.x,event.clientY-dim.y);
}
function move(e)
{
    if(didmove && isDown)
    {
        ActionHistory.saveState(board);
        didmove=false;
    }
    if(isDown && !erase)
    {
        ctx.lineTo(event.clientX- dim.x,event.clientY-dim.y);
        ctx.stroke();
    }
    if(erase && isDown )
    {
        ctx.fillStyle="red";
        ctx.clearRect(prex-dim.x- Math.floor(width/2),prey-dim.y- Math.floor(width/2),width,width);
        prex = e.x;
        prey = e.y;
        ctx.fillRect(prex-dim.x - Math.floor(width/2),prey-dim.y- Math.floor(width/2),width,width);
        ctx.fillStyle="black";
    }

}
function unset(e)
{
    isDown = false;
    didmove = true;
    if(erase)
        ctx.clearRect(prex-dim.x- Math.floor(width/2),prey -dim.y- Math.floor(width/2),width,width);
    prex = -100;
    prey = -100;    // re-set

}
function resetDraw(){
    ActionHistory.saveState(board);
    ctx.clearRect(0,0,board.width,board.height);
}
function Download(){
    let a = document.createElement("a");
    document.body.appendChild(a);                   // default quality is 0.92
    a.href = board.toDataURL();
    //todo
    // 1. add menu to ask for image name and quality
    a.download = "untitle.png";         // default name 
    a.click();
    document.body.removeChild(a);
}


// can use ctx.globalComositeOperation  to implement eraser