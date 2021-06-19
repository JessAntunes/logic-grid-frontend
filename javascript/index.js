const playerSolution = [["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]]

let clueDone = false
let checked = false
let exed = false
let marker = false
let score = 1000000000



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
        const scoreFormContainer = document.querySelector(".container")
        const newScoreForm = document.querySelector(".add-score-form")

        if(event.target.matches(".clue")) {
            clueDone = !clueDone
            if(clueDone) {
                event.target.style.textDecoration = "line-through"
            } else {
                event.target.style.textDecoration = "none"
            }
        }

        if(event.target.matches(".marker")) {
            if (marker) {
                event.target.style.backgroundColor = "#d5d7dd"
                marker = false
                score -= randomNumber()
            } else {
                event.target.style.backgroundColor = "rgb(128, 193, 166)"
                marker = true
                score -= randomNumber()
            }
        }

        

        if(event.target.matches(".gridbox")) {
            if(marker) {
                if(event.target.name == "checked") {
                    event.target.name = "none"
                    event.target.style.backgroundImage = "none"
                    addBlankToSolution()
                    win(currentGame)
                    changeDisplayScore()
                } else {
                    event.target.name = "checked"
                    event.target.style.backgroundImage = "url('images/checked.png')"
                    addOToSolution()
                    win(currentGame)
                    changeDisplayScore()
                }
            } else {
                if(event.target.name == "exed") {
                    event.target.name = "none"
                    event.target.style.backgroundImage = "none"
                    addBlankToSolution()
                    win(currentGame)
                    changeDisplayScore()
                } else {
                    event.target.name = "exed"
                    event.target.style.backgroundImage = "url('images/exes.png')"
                    addBlankToSolution()
                    win(currentGame)  
                    changeDisplayScore()
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

            function randomNumber() {
                return Math.floor(Math.random() * (12000 - 5)) + 5;
            }
        
            function changeDisplayScore() {
                score -= randomNumber()
                document.getElementById('your-score').innerText = score
            }


            function win(g) {
                if (JSON.stringify(playerSolution) === JSON.stringify(g.solution)) {
                    console.log("YOU WIN!")
                    const scoreFormContainer = document.querySelector(".container")
                    scoreFormContainer.style.display = "block";
                }
            }
        

        }

        

        newScoreForm.addEventListener("submit", event =>{ event.preventDefault(); 
            const name = event.target.name.value
            const submit = event.target.submit
            
            console.log("SHOW ME SUBMIT - IN THE FORM:  ", submit)
            
            fetch("http://127.0.0.1:3000/games/1/highscores", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({ 
                    "username": name,
                    "score": score
                })    
            })

            .then(response => response.json())
            .then(newScore => renderScore(newScore))
        })


    })
    

});



