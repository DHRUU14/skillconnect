
document.addEventListener("DOMContentLoaded", function () {
    const mainInput = document.getElementById("searchInput");
    const topInput = document.getElementById("topSearchInput");
    const cards = document.querySelectorAll(".cards .card");

    function filterCards(value) {
        value = value.trim().toLowerCase();

        cards.forEach(function (card) {
            const text = card.innerText.toLowerCase();
            card.style.display = text.includes(value) ? "" : "none";
        });
    }

    function connectSearch(input, otherInput) {
        if (!input) return;

        input.addEventListener("input", function () {
            if (otherInput) {
                otherInput.value = input.value;
            }

            filterCards(input.value);
        });
    }

    connectSearch(mainInput, topInput);
    connectSearch(topInput, mainInput);
});
