let timer = 60;
let score = 0;
let hitVal = 0;
let timerRunning = false

let bubbleMaker = () => {
    let clutter = "";

for(let i = 1; i <= 161; i++){
    let num = parseInt(Math.random()* 10 );
    clutter += `<div class="bubble">${num}</div>`
}

document.getElementById('pbtm').innerHTML = clutter
}

let getNewHit = () => {
    hitVal = parseInt(Math.random()*10)
    document.getElementById('hitVal').textContent = hitVal
}

let time = () => {
    if(timerRunning) return 

    timerRunning = true;
    let timeInterval = setInterval(() => {
        if(timer > 0){
            timer--
            document.getElementById('timer').textContent = timer
        }else{
            clearInterval(timeInterval)
            document.getElementById('pbtm').innerHTML = `<h2>Game Over!</h2>`
            timerRunning = false
        }
    }, 1000)
}

let getScore = () => {
    document.getElementById('pbtm')
    .addEventListener("click", (e) => {
        let scoreCheck = parseInt(e.target.textContent)
        if(scoreCheck === hitVal){
            score += 10;
            document.getElementById('score').textContent = score
            bubbleMaker()
            getNewHit()
        }
    })
}

document.getElementById('btn')
.addEventListener("click", (e) => {
    time()
    getScore()
})

bubbleMaker()
getNewHit()