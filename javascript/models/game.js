class Game {

    constructor (id, title, clues, solution, top_header, top_label, side_header, side_label, description) {
        this.id = id
        this.title = title
        this.clues = clues
        this.solution = solution
        this.top_header = top_header
        this.top_label = top_label
        this.side_header = side_header
        this.side_label = side_label
        this.description = description
        
        this.renderGame();
        
    }

    renderGame() {
        document.getElementById('description').innerText = `${this.description}`
        document.getElementById('title').innerText = `${this.title}`

        for (let i = 0; i < this.top_header.length; i++) {
            document.getElementById(`topheader${i+1}`).innerHTML = `${this.top_header[i]}`
        }
        for (let i = 0; i < this.top_label.length; i++) {
            document.getElementById(`labeltop${i+1}`).innerHTML = `${this.top_label[i]}`
        }
        for (let i = 0; i < this.side_header.length; i++) {
            document.getElementById(`sideheader${i+1}`).innerHTML = `${this.side_header[i]}`
        }
        for (let i = 0; i < this.side_label.length; i++) {
            document.getElementById(`labelleft${i+1}`).innerHTML = `${this.side_label[i]}`
        }

        const cluesCard = document.querySelector('#clues')

        for (let i = 0; i < this.clues.length; i++) {
            const cluesCardP = document.createElement('p')
            cluesCardP.classList = "clue"
            cluesCardP.innerHTML = `${this.clues[i]}`
            cluesCard.appendChild(cluesCardP)
        }
    }


}