
var number = 10;
var amount = 0;
var clickUpgrade = 1;
var numberConstant = 10
var numberBase = 11


function upgradeAmount(){
    document.getElementById("upgradeAmount").innerHTML = clickUpgrade;
    console.log("numberBase = ", numberBase);
    console.log("numberConstant = ",numberConstant);
  }


function clicker(){
    var btnOne = document.getElementById("mybtn");
    btnOne.value = number;
    btnOne.innerHTML = number;
    number = number - clickUpgrade;
    if (number < 1){
        number = numberConstant;
        amount = (amount + 1);
        document.getElementById("amountOf").innerHTML = amount;
    }
    
}

function upgrade(){
    if (amount >= 15){
        clickUpgrade = (clickUpgrade + 1);
        amount = (amount - 15);
        document.getElementById("amountOf").innerHTML = amount;
    }
    else if (amount < 15){
        clickUpgrade = (clickUpgrade + 0)
    }
}

function rebirth(){
    if (clickUpgrade > numberBase || clickUpgrade < numberBase){
        number = number + 0;
    }
    else if (clickUpgrade == numberBase){
        if (numberBase < 100){
            numberConstant = (numberConstant + 10);
            numberBase = (numberBase + 10);
            clickUpgrade = 1;
            document.getElementById("upgradeAmount").innerHTML = clickUpgrade;
        }

        else{
            numberConstant = (numberConstant + 0);
        }

    }
}
