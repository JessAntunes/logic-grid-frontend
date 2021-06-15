class Game {

    constructor (id, title, description, clues, solution, top_header, top_label, side_header, side_label) {
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
        transparentDiv.getElementByTagName('h4').innerText = this.title;
        transparentDiv.getElementById('description').innerText = this.description;


        const logicGrid = document.querySelector('#puzzle-table')
        for (let i = 0; i < this.top_header.length; i++) {
            logicGrid.getElementById(`topheader${i+1}`).innerHTML = this.top_header[i]
        }
        for (let i = 0; i < this.top_label.length; i++) {
            logicGrid.getElementById(`labeltop${i+1}`).innerHTML = this.top_label[i]
        }
        for (let i = 0; i < this.side_header.length; i++) {
            logicGrid.getElementById(`sideheader${i+1}`).innerHTML = this.side_header[i]
        }
        for (let i = 0; i < this.side_label.length; i++) {
            logicGrid.getElementById(`labelleft${i+1}`).innerHTML = this.side_label[i]
        }

        const cluesCard = document.querySelector('#clues')

        for (let i = 0; i < this.clues.length; i++) {
            const cluesCardP = document.createElement('p')
            cluesCardP.innerHTML = this.clues[i]
            cluesCard.appendChild(cluesCardP)
        }

    }


}