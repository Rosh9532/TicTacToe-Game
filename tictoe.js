function startgame(){
    for (var i=1;i<=9;i=i+1){
        clearBox(i);
    }
document.turn="X";
if(Math.random()<0.5){
    document.turn="O";
}
document.winner=null;
setMessage(document.turn+"gets to start");
document.getElementById("c1").style.color="#3FC80E ";
document.getElementById("c2").style.color="#3FC80E ";
document.getElementById("c3").style.color="#3FC80E ";
document.getElementById("c4").style.color="#3FC80E ";
document.getElementById("c5").style.color="#3FC80E ";
document.getElementById("c6").style.color="#3FC80E ";
document.getElementById("c7").style.color="#3FC80E ";
document.getElementById("c8").style.color="#3FC80E ";
document.getElementById("c9").style.color="#3FC80E ";
}
function setMessage(msg){
    document.getElementById("message").textContent=msg;
}
function nextmove(box){
    if (document.winner!=null){
        setMessage(document.winner+"won the game already");
    } 
    else if(box.textContent==""){
        box.textContent=document.turn;
        switchturn();
    }
    else{
        setMessage("Done already in box");
    }
}

function switchturn(){
    if (checkforwinner(document.turn)){
        setMessage("Congratulations"+document.turn+"!!YOU WIN");
        document.winner=document.turn;
    }
    else if(Checkfortie()){
        setMessage("Its a tie..!! Play Again...!!!");

    }
    else if(document.turn=="X"){
        document.turn="O";
        setMessage("It's "+document.turn+"'s turn!");

    }
    else{
        document.turn="X";
        setMessage("It's "+document.turn+"'s turn!");

    }

}
function checkforwinner(move){
    var result=false;
    if(checkRow(1,2,3,move)||checkRow(4,5,6,move)||checkRow(7,8,9,move)||checkRow(1,4,7,move)||checkRow(2,5,8,move)||checkRow(3,6,9,move)||checkRow(1,5,9,move)||checkRow(3,5,7,move)){
        result=true;
    }
    return result;
}
function checkRow(a,b,c,move){
    var result=false;
    if(getBox(a)==move && getBox(b)==move && getBox(c)==move){
        result= true;
    }
    return result;
}
function getBox(number){
    return document.getElementById("c"+ number).textContent;
}
function clearBox(number){
    document.getElementById("c"+number).textContent="";
}
function Checkfortie(){
    for(var i=1;i<10;i++){
        if(getBox(i)=="")
        return false;
    }
   return true; 
}