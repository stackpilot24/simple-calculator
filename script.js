const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

function handleInput(key) {
    if (key === "C") {
        display.value = "";
        return;
    }

    if (key === "=") {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
        return;
    }

    display.value += key;
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const key = btn.getAttribute("data-key");  
        handleInput(key);
    });
});

document.addEventListener("keydown", (e) => {
    let key = e.key;

    if (key === "Enter") key = "=";
    if (key === "Backspace") key = "C";

    const btn = [...buttons].find(b => b.getAttribute("data-key") === key);

    if (btn) {
        handleInput(key);
        btn.classList.add("active");
        setTimeout(() => btn.classList.remove("active"), 150);
    }
});
