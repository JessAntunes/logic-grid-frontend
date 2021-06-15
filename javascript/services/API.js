class API {

    static addGames() {
        fetch("http://127.0.0.1:3000/games")
        .then(response => response.json())
        .then(game => {
                const {id, title, discription, clues, solution, top_header, top_label, side_header, side_label} = game
                // new Game(id, title, discription, clues, solution, top_header, top_label, side_header, side_label)
            })
        }
   
}

