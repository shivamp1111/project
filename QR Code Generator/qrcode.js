document.querySelector('.generate-btn').addEventListener('click', qrcodegeneretor);

document.querySelector('#qr-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        qrcodegeneretor();
    }
});

function qrcodegeneretor() {
    const input = document.querySelector('#qr-input').value;

    if (input.trim() !== '') {
        const apiurl = `https://quickchart.io/qr?text=${encodeURIComponent(input)}`;

        const qrimg = document.querySelector('#qr-container img');
        qrimg.src = apiurl;

        const qrcontainer = document.querySelector('#qr-container');
        qrcontainer.classList.add('expanded');
    } else {
        alert('Please enter your link or text for QR Code generation');
    }
}
