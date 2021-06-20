class API {

    static addGames() {
        fetch("http://127.0.0.1:3000/games")
        .then(response => response.json())
        .then(games => {
                games.forEach( game => {
                const {id, title, clues, solution, top_header, top_label, side_header, side_label, description} = game
                new Game(id, title, clues, solution, top_header, top_label, side_header, side_label, description)
            })
        })
    }

    static addHighscores() {
        fetch("http://127.0.0.1:3000/games/1/highscores")
        .then(response => response.json())
        .then(highscores => {
                highscores.forEach( highscore => {
                const {id, name, score, game_id} = highscore
                new Highscore(id, name, score, game_id)
            })
        })
    }
   
}

