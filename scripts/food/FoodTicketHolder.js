//Defines where the number of food tickets sold will appear in the DOM
const contentTarget = document.querySelector(".food")

//Defines where to listen for eventHub broadcast
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {

    eventHub.addEventListener("foodClicked", event => {
        console.log("Food Tickets Listening")
        contentTarget.innerHTML += `
        <div class="person eater"></div>
         `
    })

}