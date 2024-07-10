function sendDataToApi(userData) {
    fetch('https://6652fc51813d78e6d6d6ca01.mockapi.io/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
}



document.querySelector('#btn').addEventListener('click', function() {
   
    let email = document.querySelector('#username').value;
    let password = document.querySelector("#password").value;
    
    
    let userData = {
        email: email,
        password: password
    };

    if (password < 6){
        const erorrPassword = document.querySelector('#passwordErorr').innerHTML = '<p>Password it can 6</p>';
    }


    if (email == ""){
        const erorremagle = document.querySelector('#emagleEr').innerHTML = '<p>Plis enter your Email or Phone</p>';
        return true;
    }

    if (email && password != ""){
        sendDataToApi(userData);
    }

    if (password == ""){
        const erorrPassword = document.querySelector('#passwordErorr').innerHTML = '<p>Plis enter your Email or Phone</p>';
        return true;
    }

    window.open("http://127.0.0.1:5500/projects/home/index.html");
});



