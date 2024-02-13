const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Function to load notes from localStorage
function showNotes() {
    const notes = localStorage.getItem("notes");
    if (notes) {
        notesContainer.innerHTML = notes;
    }
}

// Function to update localStorage with notes
function updateStorage() {
    const notes = notesContainer.innerHTML;
    localStorage.setItem("notes", notes);
}

// Event listener for the create notes button
createBtn.addEventListener("click", () => {
    // Create note elements
    let inputBox = document.createElement("div");
    let noteContent = document.createElement("p");
    let deleteIcon = document.createElement("img");

    // Set up note elements
    inputBox.className = "input-box";
    noteContent.setAttribute("contenteditable", "true");
    deleteIcon.src = "images/delete.png";

    // Append elements to notes container
    inputBox.appendChild(noteContent);
    inputBox.appendChild(deleteIcon);
    notesContainer.appendChild(inputBox);

    // Update localStorage
    updateStorage();
});

// Event listener for delete and edit functionality
notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        // Delete note
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        // Update note content
        e.target.onkeyup = function () {
            updateStorage();
        };
    }
});

// Load notes when the page loads
showNotes();
