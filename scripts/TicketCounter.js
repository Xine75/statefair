
const contentTarget = document.querySelectorAll(".entry")
const eventHub = document.querySelector("#state-fair")
let ticketSales = 0

export const TicketCounter = () => {
    //add one to Total Tickets purchased every time any button is clicked
    eventHub.addEventListener("anyButtonClicked", event => {
        console.log("All buttons listening")
        contentTarget.innerHTML = `Total tickets purchased: ${ticketSales}++`
    })
}



    
    
