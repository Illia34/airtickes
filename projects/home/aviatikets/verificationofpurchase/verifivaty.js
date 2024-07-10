document.querySelector('#btn').addEventListener('click', function() {
    const emailSend = document.querySelector('#email').value;
    if (emailSend == ""){
        const erorremagle = document.querySelector('#emagleEr').innerHTML = '<p>Plis enter your Email</p>';
        return true;
    }else{
        const windowRes = document.querySelector('#window').innerHTML = '<p>Thank you for your purchase</p> <a href="http://127.0.0.1:5500/projects/home/index.html"><button class="btn-2">Home</button> </a> ';
    }
});
