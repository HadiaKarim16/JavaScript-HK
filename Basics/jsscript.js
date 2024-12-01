function createDiv() {
    // Create a new div element
    const div = document.createElement('div');
    console.log(div);

    // Set properties of the div
    div.className = "main";
    div.id = Math.round(Math.random() * 10 + 1);
    div.setAttribute("title", "generated title");
    div.style.backgroundColor = "lightpink";
    div.style.padding = "15px";
    div.style.color = "black";
    div.style.borderRadius = "15px";

    // Add text to the div
    const addText = document.createTextNode("Hadia Karim");
    div.appendChild(addText);

    // Attach the div to the document body
    document.body.appendChild(div);
}

// Call the function
createDiv();


// Function with passing an argument of text and background Color
function createNewDiv(text, bgColor) {
    // Create a new div element
    const div = document.createElement('div');
    console.log(div);

    // Set properties of the div
    div.className = "main";
    div.id = Math.round(Math.random() * 10 + 1);
    div.setAttribute("title", "generated title");
    div.style.backgroundColor = bgColor; // Use the passed bgColor argument
    div.style.padding = "15px";
    div.style.color = "black";
    div.style.borderRadius = "15px";

    // Add text to the div
    const addText = document.createTextNode(text); // Use the passed text argument
    div.appendChild(addText);

    // Attach the div to the document body
    document.body.appendChild(div);
}

// Call the function with arguments
createNewDiv("Hadia Karim", "lightblue");
createNewDiv("Welcome to JavaScript", "lightgreen");

// Using Arrays and Loops
// Arrays for text and background colors
const texts = ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"];
const bgColors = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lightgray"];

// Loop to create 5 divs
for (let i = 0; i < 5; i++) {
    createNewDiv(texts[i], bgColors[i]);
}
