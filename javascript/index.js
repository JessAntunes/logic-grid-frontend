const playerSolution = [["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "O", "O", "", "", "", "", "O", "", ""], ["", "", "O", "", "O", "", "", "", "", "", "", "O", "", "O", "", ""], ["O", "", "", "", "", "O", "", "", "", "", "", "", "", "", "", ""], ["", "", "O", "", "", "", "", "", "", "", "", "", "", "", "", ""]]
let clueDone = false
let checked = true


document.addEventListener("DOMContentLoaded", function(){ console.log("DOM Content Loaded")

   API.addGames();

    

    document.addEventListener("click", event => { event.preventDefault();

        if(event.target.matches(".clue")) {
            clueDone = !clueDone
            if(clueDone) {
                event.target.style.textDecoration = "line-through"
            } else {
                event.target.style.textDecoration = "none"
            }
        }

        if(event.target.matches(".gridbox")) {
            checked = !checked
            if(checked === true) {
                event.target.style.backgroundImage = "url('images/checked.png')"
            } else {
                event.target.style.backgroundImage = "none"
            }
            // console.log(event.target.id)
        }
    

    })

});

