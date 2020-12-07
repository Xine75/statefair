//Define where number of tickets sold will render to the DOM
const contentTarget = document.querySelector(".sideshow")

//Defines where to listen for an eventHub broadcast
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolder = () => {

    //creates a square in sideshow column every time the button is clicked
    eventHub.addEventListener("sideshowClicked", event => {
        console.log("Sideshow Tickets listening")
        contentTarget.innerHTML += `
        <div class = "person gawker"></div>
        `
    })
}