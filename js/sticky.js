
function createStickyNote() {
    let stickyNote = document.createElement("div");
    stickyNote.classList.add("mainStickyDiv");
    stickyNote.innerHTML =
        `<div class="stickyMenu" onmousedown="setSticky()" onmouseup="unsetSticky()" onmousemove="play()">
            <div class="minimize make_circle" onclick = "minimize()" ></div>
                <div class="cancel make_circle" onclick="cancel()"></div>
        </div>
        <textarea cols="30" rows="10" onmousemove="unsetSticky()"></textarea>`;
        document.body.appendChild(stickyNote);
}
//     console.log("yes")
// //     // main div
// //     let mainDiv = document.createElement("div");

// another way to create an element is to make the document.element
// and then alter it's inner html 



// //     // note-------------------------------

// //     let a = document.createElement("textarea");
// //     let cols = document.createAttribute("cols");
// //     let rows = document.createAttribute("rows");
// //     cols.value = "30";
// //     rows.value ="15";
//          another way to add attributes are
//          element.setAttribute("att_name ", "it's values");
// //     a.setAttributeNode(rows);
// //     a.setAttributeNode(cols);
// //     // a.classList.add("red");
// //     mainDiv.classList.add("box");
// //     a.style.left = (Math.floor(board.width/2)-dim.x)+"px";
// //     a.style.top = (Math.floor(board.height/2)-dim.y)+"px";
// //     a.classList.add("box");

// //     // menu--------------------------
// //     let b = document.createElement("div");
// //     // b.className.add("stickyMenu");
// //     b.classList.add("box");
// //     //circle-------------------------
// //     let circle = document.createElement("div");
// //     // circle.className.add("stickyCirle");

// //     b.appendChild(circle);
// //     b.appendChild(circle);


// //     mainDiv.appendChild(b);
// //     mainDiv.appendChild(a);
// //     // console.log(a);
// //     document.body.appendChild(mainDiv);
// }

function play() {

    if (!dragging) 
        return ;
    
    let stickyDiv = event.target.parentElement;
    let sticky_dim = stickyDiv.getBoundingClientRect();

    let diffx = event.x - event.target.prex;
    let diffy = event.y - event.target.prey;

    let newleft = sticky_dim.x + diffx;
    let newtop = sticky_dim.y + diffy;

    stickyDiv.style.left = newleft + "px";
    stickyDiv.style.top = newtop + "px";
    
    event.target.prex = event.x;
    event.target.prey = event.y;


}
function setSticky() {

    dragging = true;
    event.target.prex = event.x;
    event.target.prey = event.y;
}
function unsetSticky() {
    dragging = false;
}
let isHidden = false;
function minimize() {

    if (!isHidden) {
        event.target.parentElement.parentElement.children[1].classList.add("hide");
    }
    else
        event.target.parentElement.parentElement.children[1].classList.remove("hide");

    isHidden = !isHidden;

}

function cancel() {
    event.target.parentElement.parentElement.remove()
}