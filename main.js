
let DomBuilder = () => {
    // get current date and time
    let date = new Date();

    // create container to display date and time on the DOM
    let dateContainer = document.createElement("p");
    dateContainer.textContent = date;

    // select output container and attach date/time component to main container
    let container = document.querySelector("#output");
    container.appendChild(dateContainer);

    // create refresh button
    let newDateButton = document.createElement("button");
    newDateButton.textContent = "Refresh Time";

    // add button to the output container
    container.appendChild(newDateButton);

    // add event listener that refreshes the DOM when button is clicked
    newDateButton.addEventListener("click", function() {
        container.textContent = " ";
        DomBuilder();
    })
}

// run function
DomBuilder()

