class User {
    constructor(username, password, score = 0) {
        this.username = username;
        this.password = password;
        this.score = score;
    }
}

module.exports = User;
