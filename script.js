const display = document.getElementById("display");
const historyList = document.getElementById("history");
const themeToggle = document.querySelector(".theme-toggle");

// =============================================== 🌙 Turn on dark mode by default ========================= 
document.body.classList.add("dark-mode");
themeToggle.textContent = "☀️ Light Mode";

// 🔹 =========================================== Adding numbers or operators to input ====================
function appendValue(value) {
    display.value += value;
}

// 🔹 ========================================= to calculate =========================
function calculate() {
    try {
        let result = eval(display.value);
        addToHistory(display.value + " = " + result);
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

// 🔹 ======================================== Cleaning the display =========================
function clearDisplay() {
    display.value = "";
}

// 🔹 ======================================== Backspace ==============================
function backspace() {
    display.value = display.value.slice(0, -1);
}

// 🔹 ======================================== History ===============================
function addToHistory(expression) {
    let li = document.createElement("li");
    li.textContent = expression;
    historyList.appendChild(li);
}

// 🔹================================================= Keyboard Enter and Backspace ==================
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        calculate();
    }
    if (event.key === "Backspace") {
        backspace();
    }
    if (event.key === "k") {  // Change "Keyboard" to an actual key like "k"
        Keyboard();  // Make sure Keyboard() is defined
    }
});

// 🔹 ================================================ Toggle dark/light mode ====================
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "🌙 Dark Mode";
    } else {
        themeToggle.textContent = "☀️ Light Mode";
    }
});
