function enviarPuntuacion(username, password, score) {
    fetch('/api/score', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, score })
    })
        .then(response => response.json())
        .then(data => console.log('Puntuación guardada:', data))
        .catch(error => console.error('Error:', error));
}

// Función para actualizar la tabla automáticamente
function actualizarLeaderboard() {
    fetch('/api/scores')
        .then(response => response.json())
        .then(users => {
            const tbody = document.getElementById('leaderboard-body');
            tbody.innerHTML = ""; // Limpiar tabla antes de actualizar
            users.sort((a, b) => b.score - a.score).forEach(user => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${user.username}</td><td>${user.score}</td>`;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Cargar el leaderboard al abrir la página
document.addEventListener("DOMContentLoaded", actualizarLeaderboard);
