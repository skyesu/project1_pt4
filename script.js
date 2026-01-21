// let mouse = document.getElementById("mouse");

let bgm = document.getElementById("username");

function pauseMusic() {
    bgm.pause();
}

function playMusic() {
    bgm.play();
}

let modalBtns = document.getElementsByClassName("modal-btn");
let closeBtns = document.getElementsByClassName("close");

for(let modalBtn of modalBtns) {
modalBtn.onclick = function(event) {
    document.querySelector(event.target.getAttribute('href')) = "block";
}
}

for(let closeBtn of closeBtns) {
closeBtn.onclick = function(event) {
        event.target.parentNode.parentNode.style.display = 'none';
}
}

window.onkeydown = function(event) {
    if (event.key == 'Escape') {
        for(let modal of modals) {
            modal.style.display = 'none';
        }
    }
}