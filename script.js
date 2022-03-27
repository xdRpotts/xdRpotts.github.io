
var number = 10
var amount = 0
var clickUpgrade = 1
var go = False

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

function autoclick(){
    go = true
    while (go){
        var btn = document.getElementById("mybtn");
        btn.value = number;
        btn.innerHTML = number;
        number = number - clickUpgrade
    }
}