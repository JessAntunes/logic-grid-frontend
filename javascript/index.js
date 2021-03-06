const playerSolution = [["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]]

let clueDone = false
let checked = false
let exed = false
let marker = false
let directions = false
let score = 100000000
let won = false



// const {id, title, clues, solution, top_header, top_label, side_header, side_label, description} = currentGame
// new Game(id, title, clues, solution, top_header, top_label, side_header, side_label, description)

document.addEventListener("DOMContentLoaded", function() { console.log("DOM Content Loaded")

   API.addGames();
   API.addHighscores();

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
        const body = document.querySelector("body")
        const title = document.getElementById("logic")
        const tagline = document.getElementById("tagline")
        
        if(event.target.matches("#directions")) {
            const directionDiv = document.getElementById("directionDiv")
            if(directions) {
                directions = false
                directionDiv.style.display = "none";
            } else {
                directions = true
                directionDiv.style.display = "block";
            }
        }

        if(event.target.matches("#marble")) {
            body.style.backgroundImage = "url(images/marble.jpg)"
            tagline.style.color = "#404446"
            title.style.color = "#404446"
        }

        if(event.target.matches("#city-rain")) {
            body.style.backgroundImage = "url(images/city-rain.jpg)"
            tagline.style.color = "#234F4A"
            title.style.color = "#234F4A"
        }
        
        if(event.target.matches("#cloudy")) {
            body.style.backgroundImage = "url(images/cloud-covered-trees.jpg)"
            tagline.style.color = "#607d8b"
            title.style.color = "#607d8b"
        }

        if(event.target.matches("#mountains")) {
            body.style.backgroundImage = "url(images/green-mountains.jpg)"
            tagline.style.color = "#607d8b"
            title.style.color = "#607d8b"
        }

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
            } else {
                event.target.style.backgroundColor = "rgb(128, 193, 166)"
                marker = true
            }
        }

        if (event.target.matches("#timer-btn")) {
            console.log("clicked")
            runTimer()
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
                return Math.floor(Math.random() * (2000000 - 5)) + 5;
            }
        
            function changeDisplayScore() {
                score -= randomNumber()
                document.getElementById('your-score').innerText = score
            }

            function win(g) {
                if (JSON.stringify(playerSolution) === JSON.stringify(g.solution)) {
                    won = true
                    console.log("YOU WIN!")
                    scoreFormContainer.style.display = "block";
                }
            }
            
        
        }

        

        // function runTimer() {   
        //     let time = 0
        //         setInterval(count, 1000)
        //         function count() {
        //             let timer = document.getElementById("timer")
        //             if (won === false) {
        //                 time += 1
        //                 console.log(time)
        //                 timer.innerText = time
        //             }
        //         }
        // }

       

        if (event.target.matches(".submit")) {

            console.log("you clicked submit")
            const name = scoreFormContainer.querySelector(".input-text").value
        
            fetch("http://127.0.0.1:3000/games/1/highscores", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({ 
                    "name": name,
                    "score": score,
                    "game_id": 1
                })    
            })

            .then(response => response.json())
            .then(
                API.addHighscores()
            )

        }

        

    })
    

});



