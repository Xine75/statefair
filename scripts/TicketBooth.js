//Get a reference ot the DOM element where the <button> will be rendered
const contentTarget = document.querySelector(".entry")
//setting up eventHub, naming variable, declaring where it will call from the DOM
const eventHub = document.querySelector("#state-fair")

//Create custom message via eventHub. This doesn't run until click event is triggered
eventHub.addEventListener("click", event => {

//Check to see if ride button was clicked. "rideTicket" must match button id on line 25
    if (event.target.id === "rideTicket") {
//Create customEvent
        const customEvent = new CustomEvent ("rideClicked", {
            detail: {
                rideButton: event.target.value
            }
        })
//Dispatch (broadcast) event to eventHub
        eventHub.dispatchEvent(customEvent)
    } else if (event.target.id === "foodTicket") {
        const foodEvent = new CustomEvent ("foodClicked", {
            detail: {
                foodButton: event.target.value
            }
        })
        eventHub.dispatchEvent(foodEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        </div>
        
    `
}

