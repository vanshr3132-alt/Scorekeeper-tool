const player1={
    score:0,
   button:document.querySelector("#player1"),
   display: document.querySelector('#p1'),
}
const player2={
    score:0,
   button:document.querySelector("#player2"),
   display: document.querySelector('#p2'),
}

const scoreselect=document.querySelector('#scorr');
// const h2= document.querySelector('h2');

let maxscore=3;
const reset= document.querySelector('#reset');
let isgameover=false;

function updatescores(player,opponent){
    // e.preventDefault();
    if(!isgameover){
       player.score+=1;
if(player.score===maxscore){
    isgameover=true;
    player.display.setAttribute('class','has-text-success')
    opponent.display.setAttribute('class','has-text-danger')
}}
player.display.innerHTML= player.score; }

player1.button.addEventListener('click',function(e){
    // e.preventDefault();
    updatescores(player1,player2);
})


player2.button.addEventListener('click',function(e){
    updatescores(player2,player1);
})
reset.addEventListener('click',resett)
scoreselect.addEventListener('change',function(){
    maxscore=parseInt(this.value);
    resett();
})
function resett(){
    isgameover=false
    for(let p of [player1,player2]){
        p.score=0;
        p.display.innerHTML=0;
        p.display.classList.remove('has-text-success','has-text-danger');
    }
}