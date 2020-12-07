//Defines where the number of food tickets sold will appear in the DOM
const contentTarget = document.querySelector(".attraction")

//Defines where to listen for eventHub broadcast
const eventHub = document.querySelector("#state-fair")

export const PackageTicketHolders = () => {

    //creates a square in food column every time the button is clicked
    eventHub.addEventListener("packageClicked", event => {
        console.log("Package Tickets Listening")
        contentTarget.innerHTML += `
        <div class="person bigSpender"></div>
         `
    })

}