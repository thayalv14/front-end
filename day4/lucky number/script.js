function checkLucky() {

    let lucky = Math.floor(Math.random() * 10) + 1;

    let num = document.getElementById("num").value;

    if (num == lucky) {
        document.getElementById("result").innerHTML =
            "Lucky Number!";
        document.getElementById("result").style.color = "green";
    }
    else {
        document.getElementById("result").innerHTML =
            "Better Luck Next Time";
        document.getElementById("result").style.color = "red";
    }
}