function handlechange( presstool)
{
    if(presstool === 'eraser') erase = true
    else erase = false;
    if( isMenuDisplay || active !== presstool)
    {
        hideMenu();
        for(let tool in tools)
        {
                tools[tool].classList.remove("active");
        }
        tools[presstool].classList.add("active");
        active= presstool;
        isMenuDisplay=false;
    }
    else
    {
        hideMenu();
        toolsMenu[presstool].classList.add("show");
        isMenuDisplay=true;
    }

}
function changePencilColor(color){
    ctx.strokeStyle=color;
    
    switch(color)
    {
        case "blue":{
            tools.pencil.src = "icons/Blue_Pencil.svg";
            break;
        }
        case "red":
        {
            tools.pencil.src = "icons/Red_Pencil.svg";
            break;
        }
        default:{
            tools.pencil.src = "icons/Black_Pencil.svg";
        }
    }
}

toolsMenu.pencilSlider.oninput = function(){
    ctx.lineWidth = this.value/10;
}
toolsMenu.eraserSlider.oninput =function(){
    width = this.value;
}
function hideMenu(){
    for(let tool in toolsMenu)
    {
        toolsMenu[tool].classList.remove("show");
    }
}
