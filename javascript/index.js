const playerSolution = [["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]]
// const gameSolution = Game.all[0]
let clueDone = false
let checked = false
let exed = false
let marker = false


// const {id, title, clues, solution, top_header, top_label, side_header, side_label, description} = currentGame
// new Game(id, title, clues, solution, top_header, top_label, side_header, side_label, description)

document.addEventListener("DOMContentLoaded", function() { console.log("DOM Content Loaded")

   API.addGames();

   let currentGame = {}

   fetch("http://127.0.0.1:3000/games/1")
   .then(response => response.json())
   .then(game => {
           const {id, title, clues, solution, top_header, top_label, side_header, side_label, description} = game
           currentGame = new Game(id, title, clues, solution, top_header, top_label, side_header, side_label, description)
    })

   

    document.addEventListener("click", event => { event.preventDefault();
        const firstIndex = event.target.id[0]
        const secondIndex = event.target.id.slice(1,3) - 1

        if(event.target.matches(".clue")) {
            clueDone = !clueDone
            if(clueDone) {
                event.target.style.textDecoration = "line-through"
            } else {
                event.target.style.textDecoration = "none"
            }
        }

        if(event.target.matches(".toggle")) {
            marker = !marker
        }

        if(event.target.matches(".start")) {
            countTimer()
        }

        if(event.target.matches(".gridbox")) {
            if(marker) {
                checked = !checked
                if(checked) {
                    event.target.style.backgroundImage = "url('images/checked.png')"
                    addOToSolution()
                    win(currentGame)
                } else {
                    event.target.style.backgroundImage = "none"
                    addBlankToSolution()
                    win(currentGame)
                }
            } else {
                exed = !exed
                if(exed === true) {
                    event.target.style.backgroundImage = "url('images/exes.png')"
                    addBlankToSolution()
                    win(currentGame)
                } else {
                    event.target.style.backgroundImage = "none"
                    addBlankToSolution()
                    win(currentGame)
                }
            }

            function addOToSolution() {
                if(firstIndex === "A"){
                    playerSolution[0][secondIndex] = "O"
                } else if(firstIndex === "B"){
                    playerSolution[1][secondIndex] = "O"
                } else if(firstIndex === "C"){
                    playerSolution[2][secondIndex] = "O"
                } else if(firstIndex === "D"){
                    playerSolution[3][secondIndex] = "O"
                } else if(firstIndex === "E"){
                    playerSolution[4][secondIndex] = "O"
                } else {
                    playerSolution[5][secondIndex] = "O"
                }
            }

            function addBlankToSolution() {
                if(firstIndex === "A"){
                    playerSolution[0][secondIndex] = ""
                } else if(firstIndex === "B"){
                    playerSolution[1][secondIndex] = ""
                } else if(firstIndex === "C"){
                    playerSolution[2][secondIndex] = ""
                } else if(firstIndex === "D"){
                    playerSolution[3][secondIndex] = ""
                } else if(firstIndex === "E"){
                    playerSolution[4][secondIndex] = ""
                } else {
                    playerSolution[5][secondIndex] = ""
                }
            }


            function win(g) {
                if (JSON.stringify(playerSolution) === JSON.stringify(g.solution)) {
                    console.log("YOU WIN!")
                } else {
                    console.log("try again")
                    console.log(g.solution)
                }
            }
            
            var timerVar = setInterval(countTimer, 1000);
            var totalSeconds = 0;
            function countTimer() {
                ++totalSeconds;
                var hour = Math.floor(totalSeconds /3600);
                var minute = Math.floor((totalSeconds - hour*3600)/60);
                var seconds = totalSeconds - (hour*3600 + minute*60);
                if(hour < 10)
                    hour = "0"+hour;
                if(minute < 10)
                    minute = "0"+minute;
                if(seconds < 10)
                    seconds = "0"+seconds;
                document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
            }



        }


    })
    

});



