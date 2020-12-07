//Defines where the number of rides will appear in DOM
const contentTarget = document.querySelector(".rides")
//defines where to listen for eventHub broadcast
const eventHub = document.querySelector("#state-fair")


export const RideTicketHolders = () => {
    
    eventHub.addEventListener("rideClicked", event => {
            console.log ("Im listening")
            contentTarget.innerHTML +=  `
            <div class="person rider"></div>
            `



        
       
    })
}

