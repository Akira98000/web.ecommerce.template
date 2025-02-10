function getEndTime() {
    let now = new Date();
    now.setHours(23, 59, 59, 999); 
    return now.getTime();
}

function updateCountdown() {
    let now = new Date().getTime();
    let endTime = getEndTime();
    let timeLeft = endTime - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "Promo terminée !";
        return;
    }

    let hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    let seconds = Math.floor((timeLeft / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        `${hours}H : ${minutes}M : ${seconds}S`;
}

setInterval(updateCountdown, 1000);
updateCountdown();