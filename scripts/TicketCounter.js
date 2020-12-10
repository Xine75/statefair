
const contentTarget = document.querySelector(".customers")
// console.log(contentTarget)
const eventHub = document.querySelector("#state-fair")


let ticketSales = 0

export const TicketCounter = () => {
    //add one to Total Tickets purchased every time any button is clicked
    eventHub.addEventListener("anyButtonClicked", event => {
        // console.log("All buttons listening")
        // ticketSales++
        ticketSales += event.detail.ticketSale
        console.log("count", ticketSales)
        contentTarget.innerHTML = `Total tickets purchased: ${ticketSales}`
    })
}



    
    
