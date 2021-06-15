class Game {

    constructor (id, title, discription, clues, solution, top_header, top_label, side_header, side_label) {
        this.id = id
        this.title = title
        this.description = description
        this.clues = clues
        this.solution = solution
        this.top_header = top_header
        this.top_label = top_label
        this.side_header = side_header
        this.side_label = side_label

        renderGame();
        
    }

    renderGame() {
        const transparentDiv = document.querySelector('#transparent')
        transparentDiv.getElementByTagName('h4').innerText = Game.title;
        transparentDiv.getElementById('description').innerText = Game.description;


        const logicGrid = document.querySelector('#puzzle-table')
        for (let i = 0; i < Game.top_header.length; i++) {
            logicGrid.getElementById(`topheader${i+1}`).innerHTML = Game.top_header[i]
        }
        
        


    }














}