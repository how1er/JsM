const player1={
    name:'Scorpion',
    hp:50,
    img:'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon:['меч'],
    attack:function(){
        console.log(player1.name+' fight..')
    },
}

const player2={
    name:'SUB-ZERO',
    hp:80,
    img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon:['копье'],
    attack:function(){
        console.log(player1.name+' fight..')
    },
}

const $arenas=document.createElement('div');
$arenas.classList.add('arenas');
document.body.appendChild($arenas);

//
function createPlayer(player,player_object){
    const $player=document.createElement('div');
    $player.classList.add(player);
    const $progressbar =document.createElement('div');
    $progressbar.classList.add('progressbar');
    const $life =document.createElement('div');
    $life.style.width=player_object.hp;
    $life.classList.add('life');
    const $name =document.createElement('div');
    $name.classList.add('name');
    $name.innerText=player_object.name;
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $player.appendChild($progressbar);
    const $character=document.createElement('div');
    const $img=document.createElement('img');
    $img.src=player_object.img;
    $character.appendChild($img);
    $player.appendChild($character);
    $arenas.appendChild($player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);