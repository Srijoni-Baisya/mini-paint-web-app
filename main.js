var mouseEvent = "empty";
var last_position_x, last_position_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width = 1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("line_width").value;
    mouseEvent="mouseDown";  
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    current_mouse_x = e.clientX-canvas.offsetLeft;
    current_mouse_y = e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;

        console.log("Last position of x and y coordinates = ");
        console.log("X = "+last_position_x+", Y = "+last_position_y);
        ctx.moveTo(last_position_x,last_position_y);

        console.log("Current position of x and y coordinates = ");
        console.log("X = "+current_mouse_x+", Y = "+current_mouse_y);
        ctx.lineTo(current_mouse_x,current_mouse_y);

        ctx.stroke();
    }

    last_position_x=current_mouse_x;
    last_position_y=current_mouse_y;
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}