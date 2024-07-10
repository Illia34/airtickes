(function(d){
	let display = d.querySelector('#countdown .display');
	let timeLeft = parseInt(display.innerHTML);
	
	let timer = setInterval(function(){
	  if(--timeLeft >= 0) {
		  display.innerHTML = timeLeft;
	    }else {
		    clearInterval(timer);
            document.querySelector('#timeFinish').innerHTML = '<p>time is finish</p>'
            window.open("http://127.0.0.1:5500/projects/home/");
	    }
	}, 1000)
})(document);



function sendDataToApi(userPay) {
    fetch('https://6652fc51813d78e6d6d6ca01.mockapi.io/pay', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userPay),
    })
}

//_________________________________________________________________________//
 

document.querySelector('#btn').addEventListener('click', function() {
    let cvcvvc = document.querySelector('#password').value;
    let name = document.querySelector('#Cardhoder__credits').value;
    let number__credits = document.querySelector('#number__credits').value;

    let userPay = {
        cvcvvc: cvcvvc,
        name: name,
        number__credits: number__credits
    };

    if (cvcvvc == ""){
        const erorrValue = document.querySelector('#erorr-value').innerHTML = '<p>Enter your date of card Plis</p>'
        return true;
    }else{
        sendDataToApi(userPay);
    }

    if (name == ""){
         const erorrValue = document.querySelector('#erorr-value').innerHTML = '<p>Enter your date of card Plis</p>'
        return true;
    }else{
        sendDataToApi(userPay);
    }

    if (number__credits == ""){
        const erorrValue = document.querySelector('#erorr-value').innerHTML = '<p>Enter your date of card Plis</p>'
        return true;
    }else{
        sendDataToApi(userPay);
    }

    try{
        window.open("http://127.0.0.1:5500/projects/home/aviatikets/verificationofpurchase/try.html");
    }
    catch{
        window.open("http://127.0.0.1:5500/projects/home/aviatikets/verificationofpurchase/catch.html");
    }
});

