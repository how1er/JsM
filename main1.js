const player1={
    player:1,
    name:'Scorpion',
    hp:50,
    img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon:['меч'],
    attack:function(){
        console.log(player1.name+' fight..');
    },
}

const player2={
    player:2,
    name:'SUB-ZERO',
    hp:80,
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

const $arenas=createElement('div','arenas');
document.body.appendChild($arenas);


function createPlayer(player_object){
    const $player=createElement('div','player'+player_object.player);
    const $progressbar =createElement('div','progressbar');
    const $life =createElement('div','life');
    const $name =createElement('div','name');
    const $character=createElement('div','charackter');
    const $img=createElement('img');

    $life.style.width=player_object.hp;
    $name.innerText=player_object.name;
    $img.src=player_object.img;
   
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $player.appendChild($progressbar);
     $character.appendChild($img);
    $player.appendChild($character);
    return $player;
}


$arenas.appendChild(createPlayer( player1));
$arenas.appendChild(createPlayer( player2));