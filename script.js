document.getElementById("buyButton").addEventListener("click", function() {
    document.getElementById("message").innerText = "Anda telah membeli Dogecoin! 🚀";
});

const ctx = document.getElementById("priceChart").getContext("2d");

const priceChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"], // Ganti dengan data real-time nanti
        datasets: [{
            label: "Harga Dogecoin (USD)",
            data: [0.08, 0.09, 0.12, 0.10, 0.15, 0.14], // Contoh harga
            borderColor: "gold",
            backgroundColor: "rgba(255, 215, 0, 0.2)",
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: false }
        }
    }
});
