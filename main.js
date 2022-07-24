// Task 1: Show the exam result
function bonusArea(area) {
    switch (area) {
        case "A":
            return 2;
            break;
        case "B":
            return 1;
            break;
        case "C":
            return 0.5;
            break;
        default:
            return 0;
            break;
    }
} 

function bonusPerson(person) {
    switch (person) {
        case "1":
            return 2.5;
            break;
        case "2":
            return 1.5;
            break;
        case "3":
            return 1;
            break;
        default:
            return 0;
            break;
    }
}

document.getElementById("showResult").onclick = function() {
    var score1 = document.getElementById("score1").value * 1;
    var score2 = document.getElementById("score2").value * 1;
    var score3 = document.getElementById("score3").value * 1;
    var area = document.getElementById("areaPriority").value;
    var person = document.getElementById("personPriority").value;
    var bonus = bonusArea(area) + bonusPerson(person);
    var totalScore = score1 + score2 + score3 + bonus;
    var standard = document.getElementById("entranceScore").value * 1;
    var statement = "";
    if(totalScore>=standard) {
        statement = "Bạn đã đậu. Tổng điểm của bạn là: " + totalScore.toString();
    } else {
        statement = "Bạn đã không đậu. Tổng điểm của bạn là: " + totalScore.toString();
    }
    // show noti
    var tagStatement = document.createElement("h3");
    tagStatement.innerHTML = statement;
    document.getElementById("notiResult").appendChild(tagStatement);
}

function taxRate(income) {
    if(income>0 && income <=60) {
        return 0.05;
    } else if(income>60 && income<=120) {
        return 0.1;
    } else if(income>120 && income<=210) {
        return 0.15;
    } else if(income>210 && income>=384) {
        return 0.2;
    } else if(income>384 && income<=624) {
        return 0.25;
    } else if(income>624 && income<=960) {
        return 0.3;
    } else {
        return 0.35;
    }
}

document.getElementById("calculateTax").onclick = function() {
    var name = document.getElementById("name-t3").value;
    var totalIncome = document.getElementById("totalIncome").value * 1;
    var numIndependence = document.getElementById("numIndependence").value * 1;
    var tax_rate = taxRate(totalIncome);
    var tax = (totalIncome-4-numIndependence*1.6)*tax_rate;
    var statement = "Họ tên là: " + name + ". Thuế thu nhập cá nhân là: " + tax.toString();
    // show noti
    var tagStatement = document.createElement("h3");
    tagStatement.innerHTML = statement;
    document.getElementById("notiTax").appendChild(tagStatement);
}

// display effect on the numConnection element div
document.getElementById("numConnection").style.display = "none";

document.getElementById("typeCustomer").onchange = function() {
    document.getElementById("numConnection").style.display = this.value == 'Doanh Nghiệp' ? 'block' : 'none';
}


document.getElementById("calculateCabPayment").onclick = function() {
    var name = document.getElementById("name-t4").value;
    var typeCustomer = document.getElementById("typeCustomer").value;
    var numChannel =  document.getElementById("highendChannel").value * 1;
    var highendFee = 0;
    var basicFee = 0;
    var processFee = 0; 

    if(typeCustomer=="Doanh Nghiệp") {
        var numConnection = document.getElementById("numConnection").value * 1;
        processFee = 15;
        if(numConnection>0 && numConnection<=10) {
            basicFee = numConnection*75;
        } else {
            basicFee = 750 + 5*(numConnection-10);
        }
        highendFee = numChannel*50;
    } else {
        processFee = 4.5;
        basicFee = 20.5;
        highendFee = 7.5*numChannel;
    }

    totalPayment = processFee + basicFee + highendFee;
    var statement = "Họ tên là: " + name + ". Tiền cáp là: $" + totalPayment.toString();
    // show noti
    var tagStatement = document.createElement("h3");
    tagStatement.innerHTML = statement;
    document.getElementById("notiCabPayment").appendChild(tagStatement);
}