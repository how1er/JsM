// const box=document.getElementById('box')

// console.log(box.innerText)

// box.style.width='50px';

// box.style.background='green';

// box.addEventListener('click',function(){
//     alert('BUMM')
// })

const player1={
    name:'scorpion',
    hp:11,
    img:' ',
    weapon:['меч'],
    attack:function(){
        console.log(player1.name+' fight..')
    },
}

function createPlayer(){
    const $player=document.createElement('div');
    $player.classList.add('player');
    const $progressbar =document.createElement('div');
    $progressbar.classList.add('progressbar');
    const $life =document.createElement('div');
    $life.style.width='100%';
    $life.classList.add('life');
    const $name =document.createElement('div');
    $name.classList.add('name');
    $name.innerText='scorpion';
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $player.appendChild($progressbar);
    const $character=document.createElement('div');
    const $img=document.createElement('img');
    $img.src='http://reactmarathon-api.herokuapp.com/assets/liukang.gif';
    $character.appendChild($img);
    $player.appendChild($character);
    document.body.appendChild($player);
}
createPlayer();
    
