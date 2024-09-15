let change = document.querySelector('.form');

let count = 0;

function changebg() {
    count++;
    switch (count) {
        case 1:
            document.body.style.backgroundColor = 'violet';
            break;
        case 2:
            document.body.style.backgroundColor = 'indigo';
            break;
        case 3:
            document.body.style.backgroundColor = 'blue';
            break;
        case 4:
            document.body.style.backgroundColor = 'green';
            break;
        case 5:
            document.body.style.backgroundColor = 'yellow';
            break;
        case 6:
            document.body.style.backgroundColor = 'orange';
            break;
        case 7:
            document.body.style.backgroundColor = 'red';
            count = 0; // Reset count
            break;
        default:
            document.body.style.backgroundColor = 'white';
            count = 0;
            break;
    }
}
