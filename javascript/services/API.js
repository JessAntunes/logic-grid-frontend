class API {

    static addGames() {
        fetch("http://localhost3000/games")
        .then(response => response.json())
        .then(games => {
            games.forEach( game => {
                const {id, title, discription, clues, solution, top_header, top_label, side_header, side_label} = game
                new Game(id, title, discription, clues, solution, top_header, top_label, side_header, side_label)
            })
        })
    }
}