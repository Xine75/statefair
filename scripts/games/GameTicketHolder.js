//Defines where number of game tickets will render to the DOM
const contentTarget = document.querySelector(".games")

//defines where to listen for eventHub broadcast
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
    //games clicked callback

    eventHub.addEventListener("gameClicked", e => {
        console.log("Game Tickets Listening")
        contentTarget.innerHTML += `
        <div class = "person player"></div>
        `
    })
}