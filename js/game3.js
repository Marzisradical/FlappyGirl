
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;


hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150); //return random number between 0-300
    hole.style.top = random + "px"; //holetop between -150 - -450
    counter++;
}); //the hole will have a different position

setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+3)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));

    var cTop = -(500-characterTop);

    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("Game over. Score: "+(counter-1));
        character.style.top = 200 + "px";
        counter=0;
    }
},10); //gravity function 

function jump(){
    jumping = 1;
    let jumpCount = 0; // if the jumping variable equals 1 then we are currently jumping, if it equals 0 then we’re not jumping
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){ // if the top is less than 6 don't keeo adding to the top
            character.style.top = (characterTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);  //make the girl go up,
}

//var audio = new Audio('../audio/overdue.mp3');
	//audio.play();
    myAudio = new Audio('../audio/overdue.mp3'); 
    if (typeof myAudio.loop == 'boolean')
    {
        myAudio.loop = true;
    }
    else
    {
        myAudio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    myAudio.play();

