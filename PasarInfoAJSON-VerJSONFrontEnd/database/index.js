const users = []; // Almacena usuarios y puntuaciones temporalmente

module.exports = {
    getUsers: () => users,

    addOrUpdateUser: (username, password, score) => {
        let user = users.find(u => u.username === username);
        if (!user) {
            user = { username, password, score };
            users.push(user);
        } else {
            if (score > user.score) {
                user.score = score; // Solo guarda la mejor puntuación
            }
        }
    }
};
