
// ✅ Email Validation Function
function validateEmail(email) {
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

// ✅ Smooth Scrolling for Navigation Links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        let targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

// ✅ Dark Mode Toggle
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙 Dark Mode";
toggleBtn.style.position = "fixed";
toggleBtn.style.top = "10px";
toggleBtn.style.right = "10px";
toggleBtn.style.padding = "8px 12px";
toggleBtn.style.background = "#0dcaf0";
toggleBtn.style.border = "none";
toggleBtn.style.cursor = "pointer";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.innerText = "☀️ Light Mode";
    } else {
        toggleBtn.innerText = "🌙 Dark Mode";
    }
});

// ✅ Success/Error Message Function
function showMessage(message, type) {
    let msgBox = document.createElement("div");
    msgBox.innerText = message;
    msgBox.style.position = "fixed";
    msgBox.style.bottom = "10px";
    msgBox.style.left = "50%";
    msgBox.style.transform = "translateX(-50%)";
    msgBox.style.padding = "10px 20px";
    msgBox.style.color = "#fff";
    msgBox.style.fontSize = "16px";
    msgBox.style.borderRadius = "5px";
    msgBox.style.zIndex = "9999";

    if (type === "success") {
        msgBox.style.background = "green";
    } else if (type === "error") {
        msgBox.style.background = "red";
    } else {
        msgBox.style.background = "orange";
    }

    document.body.appendChild(msgBox);
    setTimeout(() => msgBox.remove(), 3000);
}
