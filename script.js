
var number = 10
var amount = 0
var clickUpgrade = 1
var perSecond = 1
var auto = 0


function clicker(){
    var btn = document.getElementById("mybtn");
    btn.value = number;
    btn.innerHTML = number;
    number = number - clickUpgrade
    if (number < 1){
        number = 10;
        amount = (amount + 1)
        document.getElementById("amountOf").innerHTML = amount
    }
    
}

function upgrade(){
    if (amount >= 15){
        clickUpgrade = (clickUpgrade + 1)
        amount = (amount - 15)
        document.getElementById("amountOf").innerHTML = amount
    }
    else if (amount < 15){
        clickUpgrade = (clickUpgrade + 0)
    }
}

function check(){
    if (auto == 1){
        window.alert("ok")
    }
}



