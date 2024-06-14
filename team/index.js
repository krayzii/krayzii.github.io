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

function updateText(id, list) {
    document.getElementById(id).innerText = list[Math.round(Math.random() * list.length)];
}

var bio_list = ["I like coding stupid things...", "Goose", "Javascript > Html", "MySql is annoying", "Coding enthusiast", "Eclipse IDE is fun", "JS > Java > PY > Lua > HTML > C#/C > SQL > CSS", "CSS sucks"];

setInterval(updateText("nathan_desc" , bio_list), 3000);