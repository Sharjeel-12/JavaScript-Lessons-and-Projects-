import createHomeTab from "./HomeTab.js";
import createContactTab from "./ContactTab.js";
import createMenuTab from "./MenuTab.js";  
import pizza from "./pizzaSlice.jpg";

// Import all necessary styles statically (Webpack will handle bundling)
import "./template.css";
import "./HomeStyle.css";
import "./MenuStyle.css";
import "./ContactStyle.css";

console.log("Hello Welcome to Restaurant Page");

let content = document.getElementById("content");
content.classList.add("home-tab"); 
createHomeTab(content, document);
// Add event listeners to the navbar buttons
let tabBtns = document.querySelectorAll("#navbar li");
tabBtns.forEach((Btn, index) => {
    Btn.addEventListener("click", (event) => {
        // Set the background image for the clicked tab
        Btn.style.background = `url('${pizza}') no-repeat center center/cover`;

        // Reset the background for the other tabs
        for (let i = 0; i < tabBtns.length; i++) {
            if (i !== index) {
                tabBtns[i].style.background = "";
            }
        }

        // Get the tab name
        let name = Btn.id;

        // Clear previous tab content
        content.innerHTML = "";

        // Conditionally update content and apply styles
        if (name === "Home") {
            createHomeTab(content, document);
            content.classList.add("home-tab"); // Apply Home tab styles
            content.classList.remove("menu-tab", "contact-tab");
        } else if (name === "Menu") {
            createMenuTab(content, document);
            content.classList.add("menu-tab"); // Apply Menu tab styles
            content.classList.remove("home-tab", "contact-tab");
        } else if (name === "ContactUs") {
            createContactTab(content, document);
            content.classList.add("contact-tab"); // Apply Contact Us tab styles
            content.classList.remove("home-tab", "menu-tab");
        }
    });
});
