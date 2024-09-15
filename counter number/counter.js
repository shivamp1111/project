

var count=0;
function increase(){
      count++;
      document.querySelector('.head').innerHTML='Counter :- '+count;
}

function decrease(){
    count--;
    document.querySelector('.head').innerHTML='Counter :- '+count;
}

function over(){
    count = 0;
    document.querySelector('.head').innerHTML='Counter :- '+count;
}