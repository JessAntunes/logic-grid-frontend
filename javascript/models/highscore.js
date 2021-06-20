class Highscore {

    static all = []

    constructor (id, name, score) {
        this.id = id
        this.name = name
        this.score = score
        
        Score.all.push(this);
        
        this.renderHighscore();
    }

    renderHighscore() {
        const scoresCard = document.querySelector('#score-div')
        const scoresCardP = document.createElement('p')

        scoresCardP.classList = "score"
        scoresCardP.innerHTML = `${this.name} ${this.score}`
        scoresCard.appendChild(scoresCardP)
    }

}