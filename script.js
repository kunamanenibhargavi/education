// Example data for educational resources
const resources = [
    { title: "Python Tutorial", type: "Tutorial", link: "https://example.com/py-tutorial" },
    { title: "Java Videos", type: "Videos", link: "https://example.com/Java-videos" },
    { title: "Javascript Articles", type: "Articles", link: "https://example.com/js-articles" }
];

// Function to display resources
function displayResources() {
    const resourceContainer = document.getElementById("resource-container");
    resourceContainer.innerHTML = ""; // Clear previous content
    
    resources.forEach(resource => {
        const resourceElement = document.createElement("div");
        resourceElement.classList.add("resource");
        
        const titleElement = document.createElement("h2");
        titleElement.textContent = resource.title;
        
        const typeElement = document.createElement("p");
        typeElement.textContent = "Type: " + resource.type;
        
        const linkElement = document.createElement("a");
        linkElement.textContent = "Link";
        linkElement.href = resource.link;
        linkElement.target = "_blank";
        
        resourceElement.appendChild(titleElement);
        resourceElement.appendChild(typeElement);
        resourceElement.appendChild(linkElement);
        
        resourceContainer.appendChild(resourceElement);
    });
}

// Call displayResources function when the page loads
window.onload = displayResources;
