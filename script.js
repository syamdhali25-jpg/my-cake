// Read ?candles=NUMBER from URL
function getCandlesFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("candles")) || 0;
}

// Place candles randomly on cake
function placeCandles(count) {
    const cake = document.getElementById("cake");

    for (let i = 0; i < count; i++) {
        const candle = document.createElement("div");
        candle.className = "candle";

        const flame = document.createElement("div");
        flame.className = "flame";
        candle.appendChild(flame);

        candle.style.left = (20 + Math.random() * 280) + "px";
        candle.style.top = (20 + Math.random() * 100) + "px";

        // Blow out when clicked
        candle.onclick = () => {
            flame.remove();
            candle.onclick = null;
            checkIfAllBlown();
        }

        cake.appendChild(candle);
    }
}

// Check if all candles are blown
function checkIfAllBlown() {
    const flames = document.querySelectorAll(".flame");
    if (flames.length === 0) {
        document.getElementById("status").innerText = "All candles blown! 🎉";
    }
}

const candleCount = getCandlesFromURL();
placeCandles(candleCount);
