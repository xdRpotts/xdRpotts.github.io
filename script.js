
var number = 10
var amount = 0

function clicker(){
    if (number < 1){
        number = 10;
        amount = (amount + 1)
        document.getElementById("amountOf").innerHTML = amount
    }
    var btn = document.getElementById("mybtn");
    btn.value = number;
    btn.innerHTML = number;
    number = number - 1;

}
