const { v4: uuid } = require('uuid');

class Game {
    id;
    name;
    status;
    nPlayers;
    players;
    dealer;
    constructor(dealer,name = '', status = 'created', players = [], nPlayers = 0) {
        this.dealer = dealer;
        this.id = uuid();
        this.name = name;
        this.status = status;
        this.players = players;
        this.nPlayers = nPlayers;
    }
}

module.exports = Game
