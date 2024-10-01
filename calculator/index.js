function show(val){
    let display = document.querySelector('.display');
    display.value+= val;
    
}
function clearDisplay(){
    let Display = document.querySelector('.display')
    Display.value = ""
}
function back() {
    let display = document.querySelector('.display');
    display.value = display.value.slice(0, -1); 
}


function result() {
    let display = document.querySelector('.display');
    try {
        display.value = eval(display.value);  // Evaluates the expression
    } catch (e) {
        display.value = 'Error';  // Displays error if the expression is invalid
    }
}
