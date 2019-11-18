
function createStickyNote() {
    let stickyNote = document.createElement("div");
    stickyNote.classList.add("mainStickyDiv");
    stickyNote.innerHTML =
        `<div class="stickyMenu" onmousedown="setSticky()">
            <div class="minimize make_circle" onclick = "minimize()" ></div>
                <div class="red make_circle" onclick="cancel()"></div>
        </div>
        <textarea cols="30" rows="10"></textarea>`;
        document.body.appendChild(stickyNote);
}
document.addEventListener("mousemove",play);
document.addEventListener("mouseup",unsetSticky);

let precord={
    x:0,
    y:0
}

let stickyDiv;
function play() {

    if (!dragging ) 
        return ;
    
    let diffx = event.x - precord.x;
    let diffy = event.y - precord.y;

    
    let newleft = stickyDiv.offsetLeft + diffx;
    let newtop = stickyDiv.offsetTop + diffy;
 
    stickyDiv.style.left = newleft + "px";
    stickyDiv.style.top = newtop + "px";
    
    precord.x = event.x;
    precord.y = event.y;


}
function setSticky() {
    dragging = true;
    precord.x = event.pageX;
    precord.y = event.pageY;
    stickyDiv = event.target.parentElement;
}
function unsetSticky() {
    if(!dragging) return;
    dragging = false;
}
function minimize() {
    if(!event.target.isHidden)
        event.target.isHidden=false;

    if (!event.target.isHidden) {
        event.target.parentElement.parentElement.children[1].classList.add("hide");
    }
    else
        event.target.parentElement.parentElement.children[1].classList.remove("hide");

    event.target.isHidden = !event.target.isHidden;

}

function cancel() {
    event.target.parentElement.parentElement.remove()
}