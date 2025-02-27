// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Image Hover Effect (Optional, already handled in CSS)
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});

// Dark Mode Toggle (Optional Feature)
const themeToggle = document.createElement("button");
themeToggle.innerText = "Toggle Dark Mode";
themeToggle.style.position = "fixed";
themeToggle.style.bottom = "20px";
themeToggle.style.right = "20px";
themeToggle.style.padding = "10px 15px";
themeToggle.style.backgroundColor = "#0073e6";
themeToggle.style.color = "white";
themeToggle.style.border = "none";
themeToggle.style.cursor = "pointer";
document.body.appendChild(themeToggle);

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Add Dark Mode Styles
const darkModeStyles = document.createElement("style");
darkModeStyles.innerHTML = `
    .dark-mode {
        background-color: #121212;
        color: white;
    }
    .dark-mode header {
        background-color: #333;
    }
    .dark-mode nav ul li a {
        color: #ddd;
    }
    .dark-mode .project, 
    .dark-mode .about, 
    .dark-mode .contact {
        background-color: #222;
        color: white;
        box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.1);
    }
    .dark-mode img {
        border: 2px solid white;
    }
`;
document.head.appendChild(darkModeStyles);

console.log("Portfolio Website Loaded Successfully!");
