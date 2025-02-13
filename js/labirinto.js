// Mini Game de Pokémon Hardcore

document.addEventListener("DOMContentLoaded", () => {
    const game = document.createElement("div");
    game.id = "game-container";
    document.body.appendChild(game);

    game.innerHTML = `
        <h1>🔥 Batalha Pokémon Hardcore 🔥</h1>
        <p id="message">Escolha um ataque!</p>
        <button id="attack1">⚡ Ataque Rápido</button>
        <button id="attack2">🔥 Lança-Chamas</button>
        <button id="attack3">❄️ Gelo Mortal</button>
        <p id="enemy-hp">HP do Inimigo: 100</p>
    `;

    const enemyHP = document.getElementById("enemy-hp");
    const message = document.getElementById("message");
    let hp = 100;

    function attack(damage) {
        let missChance = Math.random() < 0.3; // 30% de chance de errar
        if (missChance) {
            message.innerText = "Errou o ataque! O inimigo contra-atacou!";
            hp -= 15;
        } else {
            hp -= damage;
            message.innerText = `Acertou! O inimigo perdeu ${damage} de HP!`;
        }

        if (hp <= 0) {
            enemyHP.innerText = "HP do Inimigo: 0";
            message.innerText = "🏆 Você venceu! Mas foi difícil, né?";
        } else {
            enemyHP.innerText = `HP do Inimigo: ${hp}`;
        }
    }

    document.getElementById("attack1").addEventListener("click", () => attack(10));
    document.getElementById("attack2").addEventListener("click", () => attack(20));
    document.getElementById("attack3").addEventListener("click", () => attack(30));
});
