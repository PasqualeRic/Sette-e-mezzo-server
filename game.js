const { v4: uuid } = require('uuid');

class Game {
    id;
    name;
    status;
    nPlayers;
    players;
    admin;
    constructor(admin,name = '', status = 'waiting', players = [], nPlayers = 0) {
        this.admin = admin;
        this.id = uuid();
        this.name = name;
        this.status = status;
        this.players = players;
        this.nPlayers = nPlayers;
    }
}

module.exports = Game
