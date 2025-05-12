document.addEventListener("DOMContentLoaded", function() {
    const animationTarget = document.getElementById("targetAnimation");
    const animationStart = document.getElementById("startBtn");
    const animationReset = document.getElementById("resetBtn");
    const animationCountDelay = document.getElementById("countAnimation");

    let animationCount = localStorage.getItem("countAnimation") || 0;
    animationCountDelay.textContent = `Animation has run ${animationCount} times`;

    function animationTrigger() {
        animationTarget.classList.add("animate")
        animationCount++;

        localStorage.setItem("countAnimation", animationCount);
        animationCountDelay.textContent = `Animation has run ${animationCount} times`;

        setTimeout(() => {
            animationTarget.classList.remove("animate");
        }, 3000);
    }

    function animationResetTrigger() {
        animationCount = 0;
        localStorage.setItem("countAnimation", animationCount);
        animationCountDelay.textContent = `Animation has run ${animationCount} times`;
    }

    animationStart.addEventListener("click", animationTrigger);
    animationReset.addEventListener("click", animationResetTrigger);

    if (animationCount < 3) {
        setTimeout(animationTrigger, 500);
    }
});