
var number = 10
var amount = 0
var clickUpgrade = 1

function clicker(){
    var btnOne = document.getElementById("mybtn");
    btnOne.value = number;
    btnOne.innerHTML = number;
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
