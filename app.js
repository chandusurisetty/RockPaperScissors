const btns = document.querySelectorAll(".playerbtn");
const rps = ["ROCK", "PAPER", "SCISSOR"]
const player1 = document.querySelector(".player1")
const player2 = document.querySelector(".player2")
const declare = document.querySelector(".declare");
const reload = document.querySelector(".reload")

let playagain = true;
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (playagain == true) {
            const place = rps[Math.floor(Math.random() * 3)]

            player1.style.backgroundImage = `url('/img/${btn.innerText}.png')`
            player2.style.backgroundImage = `url('/img/${place}.png')`;


            const rp = (btn.innerText == "ROCK" && place == "PAPER")
            const ps = (btn.innerText == "PAPER" && place == "SCISSOR")
            const sr = (btn.innerText == "SCISSOR" && place == "ROCK")
            if (rp || ps || sr) {
                declare.innerText = "Computer wins"
            }
            else if (place == btn.innerText) {
                declare.innerText = "Drow Play Again"
            }
            else {
                declare.innerText = "You Win"
            }
            if (place != btn.innerText) {
                btns.forEach(btn => {
                    btn.disables = true;
                    btn.style.pointerEvents = "none";
                })
                playagain = false;
            }

        }
    })
});
reload.addEventListener("click", () => {
    player1.style.backgroundImage = `url('/img/player.png')`
    player2.style.backgroundImage = `url('/img/computer.png')`
    declare.innerText = "Lets see who will win"
    btns.forEach(btn => {
        btn.disables = true;
        btn.style.pointerEvents = "auto";
        playagain = true
    })

})