class Highscore {

    static all = []

    constructor (id, name, score, game_id) {
        this.id = id
        this.name = name
        this.score = score
        this.game_id = game_id
        
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