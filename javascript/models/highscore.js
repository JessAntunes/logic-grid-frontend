class Highscore {

    static all = []

    constructor (id, name, score, game_id) {
        this.id = id
        this.name = name
        this.score = score
        this.game_id = game_id
        
        Highscore.all.push(this);
        
        this.renderHighscore();
    }

    renderHighscore() {
        const scoresDiv = document.querySelector('#highscores-div')
        const scoresCardP = document.createElement('p')

        scoresCardP.classList = "score"
        scoresCardP.innerHTML = `${this.name} ${this.score}`
        scoresDiv.appendChild(scoresCardP)
    }

}