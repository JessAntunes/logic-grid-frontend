const playerSolution = [["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]]
const gameSolution = Game.solution
let clueDone = false
let checked = false
let exed = false
let marker = false



document.addEventListener("DOMContentLoaded", function() { console.log("DOM Content Loaded")

   API.addGames();

    

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
            if(marker){
                event.target.classList.toggle("before")
            } else {
                event.target.classList.toggle
            }
        }

        if(event.target.matches(".gridbox")) {
            if(marker) {
                checked = !checked
                if(checked) {
                    event.target.style.backgroundImage = "url('images/checked.png')"
                    addOToSolution()
                    win()
                } else {
                    event.target.style.backgroundImage = "none"
                    addBlankToSolution()
                    win()
                }
            } else {
                exed = !exed
                if(exed === true) {
                    event.target.style.backgroundImage = "url('images/exes.png')"
                    addBlankToSolution()
                    win()
                } else {
                    event.target.style.backgroundImage = "none"
                    addBlankToSolution()
                    win()
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

            function win() {
                console.log(playerSolution)
                if (playerSolution === gameSolution) {
                    console.log("YOU WIN!")
                } else {
                    console.log("no match")
                }
            }
            
        }

    })
    

});



