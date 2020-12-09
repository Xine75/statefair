//Get a reference ot the DOM element where the <button> will be rendered
const contentTarget = document.querySelector(".entry")
//setting up eventHub, naming variable, declaring where it will call from the DOM
const eventHub = document.querySelector("#state-fair")

//Create custom message via eventHub. This doesn't run until click event is triggered
eventHub.addEventListener("click", event => {

//Check to see which button was clicked. "rideTicket" must match button id on line 25
    if (event.target.id === "purchase--rideTicket") {
//Create customEvent
        const customEvent = new CustomEvent ("rideClicked", {
            detail: {
                rideButton: event.target.value
            }
        })
//Dispatch (broadcast) event to eventHub
        eventHub.dispatchEvent(customEvent)
        
    } else if (event.target.id === "purchase--foodTicket") {

        const foodEvent = new CustomEvent ("foodClicked", {
            detail: {
                foodButton: event.target.value
            }
        })
        eventHub.dispatchEvent(foodEvent)
    } else if (event.target.id === "purchase--gameTicket") {

        const gameEvent = new CustomEvent ("gameClicked", {
            detail: {
                gameButton: event.target.value
            }
        })
        eventHub.dispatchEvent(gameEvent)
    } else if (event.target.id === "purchase--sideshowTicket") {
        const sideshowEvent = new CustomEvent ("sideshowClicked", {
            detail: {
                sideshowButton: event.target.value
            }
        })
        eventHub.dispatchEvent(sideshowEvent)
    } else if (event.target.id === "purchase--packageTicket") {
        const packageEvent = new CustomEvent ("packageClicked", {
            detail: {
                packageButton: event.target.value
            }
        })
        eventHub.dispatchEvent(packageEvent)
    }
})

eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("purchase")) {
        console.log("starts with is working")
        const ticketEvent = new CustomEvent ("anyButtonClicked",{
            detail: {
            anyButton: e.target.value
            }
        })
        eventHub.dispatchEvent(ticketEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="purchase--rideTicket">Ride Ticket</button>
        <button id="purchase--foodTicket">Food Ticket</button>
        <button id="purchase--gameTicket">Game Ticket</button>
        <button id="purchase--sideshowTicket">Sideshow Ticket</button>
        <button id="purchase--packageTicket">Full Package Ticket</button>
        </div>
        
    `
}

