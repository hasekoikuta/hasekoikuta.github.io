document.addEventListener("DOMContentLoaded", function() {
    const weeksInLife = 4500;
    const birthday = new Date(2000, 6, 8); // 月は0から始まるため、7月を表すためには6を指定
    const currentDate = new Date();

    const weekContainer = document.getElementById("weekContainer");

    function calculateWeeks() {
        const weeksElapsed = Math.floor((currentDate - birthday) / (1000 * 60 * 60 * 24 * 7));
        for (let i = 0; i < weeksInLife; i++) {
            const weekElement = document.createElement("div");
            weekElement.classList.add("week");
            if (i < weeksElapsed) {
                weekElement.style.backgroundColor = "#000000";
            }
            weekContainer.appendChild(weekElement);
        }
    }

    calculateWeeks();
});
