const $arenas=document.querySelector('.arenas');
const $randomButton=document.querySelector(".button");

const player1={
    player:1,
    name:'Scorpion',
    hp:100,
    img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon:['меч'],
    attack:function(){
        console.log(player1.name+' fight..');
    },
}

const player2={
    player:2,
    name:'SUB-ZERO',
    hp:50,
    img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon:['копье'],
    attack:function(){
        console.log(player1.name+' fight..');
    },
}

function createElement(tag, className){
    const $tag =document.createElement(tag);
    if (className){
        $tag.classList.add(className);

    }
    return $tag;
}

function createPlayer(player_object){
    const $player=createElement('div','player'+player_object.player);
    const $progressbar =createElement('div','progressbar');
    const $life =createElement('div','life');
    const $name =createElement('div','name');
    const $character=createElement('div','character');
    const $img=createElement('img');

    $life.style.width=player_object.hp+"%";
    $name.innerText=player_object.name;
    $img.src=player_object.img;
   
    $progressbar.appendChild($name);
    $progressbar.appendChild($life);
    
    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);
    return $player;
}

function changeHP(player){
    const $playerLife=document.querySelector('.player'+ player.player+ ' .life');
    const $randomButton=Math.ceil(Math.random()*20);
    player.hp-=$randomButton;
    if (player.hp<=0){
        player.hp=0;
        $randomButton.disabled = true;
    }
    $playerLife.style.width=player.hp+'%';
}

function playerWin(name){
    const $winTitle = createElement('div','loseTitle');
    $winTitle.innerText=name+' win';
    return $winTitle;
}

$randomButton.addEventListener('click', function(){
    changeHP(player1);
    changeHP(player2);
    if(player2.hp<=0){
        $arenas.appendChild(playerWin(player1.name));
    }
    else if(player1.hp<=0){
        $arenas.appendChild(playerWin(player2.name));
    }
})

$arenas.appendChild(createPlayer( player1));
$arenas.appendChild(createPlayer( player2));