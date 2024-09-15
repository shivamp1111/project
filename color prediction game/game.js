//  let userseq =[];
//  let gameseq = [];

//  let level = 0;
//  let started = false;

// let h3 = document.querySelector('h3');
// let button = ['red','blue','pink','green']; //we can also stroe as color name [blue, red,pink,green]


//  document.addEventListener('click',function(){
// if (!started){
//     console.log('game is started');
//     started = true;
//     levelup();
// }
 
// });

// function gameflash(btn){
//     btn.classList.add ('flash');
//    setTimeout( function(){
//     btn.classList.remove('flash') ;
//    },200)
// }

// function userflash(btn){
//     btn.classList.add ('userflash');
//    setTimeout( function(){
//     btn.classList.remove('userflash') ;
//    },200)
// }

// function levelup (){
//     userseq = [];
//     level++;
//    h3.innerText = `level ${level}`;   
// let randbutton = button[Math.floor(Math.random() *button.length)];

// // let randomcolor = button[randbutton************
// gameseq.push(randbutton)
// console.log(gameseq)
// let randombutton = document.querySelector(`.${randbutton}`);
//   gameflash(randombutton);
// }

// function checkAns(ind){
//     // console.log(`current level `,level)
//     // let ind = userseq.length-1;
//     if (userseq[ind] === gameseq[ind]){
//         if(userseq.length === gameseq.length){
//             setTimeout(levelup ,250);

       
//         }
//     }else{
//         h3.innerText = 'game over ! press again to start';
//         resetGame();
//     }
// }

// function pressbtn(){
//     // console.log(this);
//     let btn = this;
//    userflash(btn);

//    userColor = btn.getAttribute('id');
//    console.log(userColor);
//    userseq.push(userColor);
//    checkAns();
// }

// let allbtns = document.querySelectorAll('.box')
// for (let btn of allbtns){
//     btn.addEventListener('click',pressbtn)
// }

// function resetGame(){
//     started =false;
//     userseq =[]
//     gameseq =[]
//     level=0;

// }


// let userseq = [];
// let gameseq = [];
// let level = 0;
// let started = false;

// let h3 = document.querySelector('h3');
// let buttons = ['red', 'blue', 'pink', 'green']; // Button IDs or class names

// document.addEventListener('click', function () {
//     if (!started) {
//         console.log('game is started');
//         started = true;
//         levelup();
//     }
// });

// function gameflash(btn) {
//     btn.classList.add('flash');
//     setTimeout(function () {
//         btn.classList.remove('flash');
//     }, 200);
// }

// function userflash(btn) {
//     btn.classList.add('userflash');
//     setTimeout(function () {
//         btn.classList.remove('userflash');
//     }, 200);
// }

// function levelup() {
//     userseq = [];
//     level++;
//     h3.innerText = `Level ${level}`;
//     let randbutton = buttons[Math.floor(Math.random() * buttons.length)];
//     gameseq.push(randbutton);
//     console.log(gameseq);
//     let randombutton = document.querySelector(`#${randbutton}`);
//     gameflash(randombutton);
// }

// function checkAns() {
//     console.log(`Current level: ${level}`);
//     let ind = userseq.length - 1;
//     if (userseq[ind] === gameseq[ind]) {
//         if (userseq.length === gameseq.length) {
//             setTimeout(levelup, 1000);
//         }
//     } else {
//         console.log('Press again to start a new game');
//         document.querySelector('body').style.backgroundColor='red'
//         setTimeout(function(){
//           document.querySelector('body').style.backgroundColor='white'
//         },150)
//         h3.innerHTML = `game is Over Score is ${level}Press again to start a new game`;
//         resetGame();
//     }
// }

// function pressbtn() {
//     if (!started) return; // Ignore button presses if the game hasn't started

//     let btn = this;
//     userflash(btn);

//     let userColor = btn.getAttribute('id');
//     console.log(userColor);
//     userseq.push(userColor);
//     checkAns();
// }

// let allbtns = document.querySelectorAll('.box');
// for (let btn of allbtns) {
//     btn.addEventListener('click', pressbtn);
// }

// function resetGame() {
//     started = false;
//     userseq = [];
//     gameseq = [];
//     level = 0;
// }


let userseq = [];
let gameseq = [];
let level = 0;
let started = false;

let h3 = document.querySelector('h3');
let buttons = ['red', 'blue', 'pink', 'green']; // Button IDs or class names

document.addEventListener('click', function () {
    if (!started) {
        console.log('Game is starting...');
        started = true;
        levelup();
    }
});

function gameflash(btn) {
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove('flash');
    }, 300); // Adjusted flash duration to 300ms for better visibility
}

function userflash(btn) {
    btn.classList.add('userflash');
    setTimeout(function () {
        btn.classList.remove('userflash');
    }, 300); // Adjusted flash duration to 300ms for better visibility
}

function levelup() {
    userseq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let randbutton = buttons[Math.floor(Math.random() * buttons.length)];
    gameseq.push(randbutton);
    console.log(gameseq);
    let randombutton = document.querySelector(`#${randbutton}`);
    gameflash(randombutton);
}

function checkAns() {
    let ind = userseq.length - 1;
    if (userseq[ind] === gameseq[ind]) {
        if (userseq.length === gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        console.log('Incorrect sequence!');
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = 'white';
        }, 150);
        h3.innerText = `Game over! Score: ${level}. Press anywhere to start a new game.`;
        setTimeout(resetGame,150);
    }
}

function pressbtn() {
    if (!started) return; // Ignore button presses if the game hasn't started

    let btn = this;
    userflash(btn);

    let userColor = btn.getAttribute('id');
    console.log(`User selected: ${userColor}`);
    userseq.push(userColor);
    checkAns();
}

let allbtns = document.querySelectorAll('.box');
for (let btn of allbtns) {
    btn.addEventListener('click', pressbtn);
}

function resetGame() {
    started = false;
    userseq = [];
    gameseq = [];
    level = 0;
}




