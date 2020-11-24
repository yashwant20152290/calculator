//Calculator Tip
functionculateTip() {
    var billAmt = document.getElementById('billamt').Value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numofPeople = document.getElementById("peopleamt").value;

    //validate input
    if (billAmt === "" || serviceQual == 0) {
        alert("Please enter values");
        return;
    }
    // clock to see this input is empty or less than equal to 1
    if (numofpeople === "" || numofpeople <= 1) {
        numofPeople =1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //Calculate Tip
    var total =(billAmt + serviceQual) / numofPeople;
    //round to two decimal places
    total = Math.round(total + 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHtml = total;


}

//hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getEllementById("each").style.display = "none";


//click to call function
document.getElementById("calculate").onclick = function() {

};
