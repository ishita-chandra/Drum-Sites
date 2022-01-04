
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function ()
{

var buttonInnerHTML= this.innerHTML;

makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);

}
);}
document.addEventListener("keydown",function(event){

  makeSound(event.key);
  buttonAnimation(event.key);

});
function buttonAnimation(currentKey)
{
var activeButton =  document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
setTimeout(function()
{activeButton.classList.remove("pressed")
},150);}


function makeSound(key){
switch(key){
  case "w":
    var crash=new Audio('https://ishita-chandra.github.io/Drum-Sites/sounds/crash.mp3');
    crash.play();
   break;
  case "a":
    var kick=new Audio('https://ishita-chandra.github.io/Drum-Sites/sounds/kick.mp3');
    kick.play();
   break;
  case "s":
    var snare=new Audio('https://ishita-chandra.github.io/Drum-Sites/sounds/snare.mp3');
    snare.play();
   break;
  case "d":
    var tom1=new Audio('https://ishita-chandra.github.io/Drum-Sites/sounds/tom-1.mp3');
    tom1.play();
   break;
  case "j":
    var tom2=new Audio('https://ishita-chandra.github.io/Drum-Sites/sounds/tom-2.mp3');
    tom2.play();
   break;
  case "k":
    var tom3=new Audio('https://ishita-chandra.github.io/Drum-Sites/sounds/tom-3.mp3');
    tom3.play();
   break;
  case "l":
    var tom4=new Audio('https://ishita-chandra.github.io/Drum-Sites/sounds/tom-4.mp3');
    tom4.play();
   break;
  default:
   alert("Press only the w,s,a,d,j,k,l");
}}
