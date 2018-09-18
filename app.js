

function getId(name) {
    return document.getElementById(name);
} 

let ballSize = 20;
let boxSixe = ballSize * 12 + 6.5;
let toMove = ballSize;
let toLeft = 0;
let toTop = 0;


// Style Starts

let cvStyle = {
    height: boxSixe + 'px',
    width: boxSixe + 'px',
    border: '3px solid green', 
    position: 'relative'
} 


let ballStyle = {
    height: ballSize + 'px',
    width: ballSize + 'px',
    background: 'red',
    borderRadius: '50%',
    position: 'absolute',
    transition: ".4s",
    top: `${toTop}px`,
    left: `${toLeft}px`
}

// // Style End



// Get Elements
let cv = getId('canvas'); 
let ball = getId('ball'); 
let allBtn = getId('allBtn');


// Assigning Style to Elements 
Object.assign(cv.style, cvStyle); 
Object.assign(ball.style, ballStyle); 


/* ============================= 
* Event Delegation & click event 
============================= */ 

allBtn.onclick = function(e) { 
    let target = e.target.innerHTML; 
    ballMove(target); 
} 




/* ==============================
        Ball Movement
============================== */

function ballMove(target) { 
    if(target === 'Left' && toLeft > 0) { 
        toLeft -= toMove;
        ball.style.left = toLeft + 'px';
    } 
    else if(target === 'Right' && toLeft < boxSixe-ballSize*2) { 
        toLeft += toMove;
        ball.style.left = toLeft + 'px';
    } 
    else if(target === 'Top' && toTop > 0) { 
        toTop -= toMove;
        ball.style.top = toTop + 'px';
    }
    else if(target === 'Bottom' && toTop < boxSixe-ballSize*2) {
        toTop += toMove;
        ball.style.top = toTop + 'px';
    } 
} 



