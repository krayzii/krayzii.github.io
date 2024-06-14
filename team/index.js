function goToProgress() {
    document.getElementById("0").style.display = "none";
    document.getElementById("1").style.display = "flex";
    document.getElementById("2").style.display = "none";
}

function goToMain() {
    document.getElementById("0").style.display = "flex";
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
}

function goToTeam() {
    document.getElementById("0").style.display = "none";
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "flex";
}