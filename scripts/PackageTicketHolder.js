//Defines where the number of food tickets sold will appear in the DOM
const contentTarget = document.querySelectorAll(".people")

//I did this to check what was happening with contentTarget,
//and discovered it was an array
// console.log(contentTarget)

//Defines where to listen for eventHub broadcast
const eventHub = document.querySelector("#state-fair")

export const PackageTicketHolders = () => {

    //creates a square in every column every time the button is clicked by using
    //a for...of to loop over the arry of #package elements
    eventHub.addEventListener("packageClicked", event => {

        for (const content of contentTarget){
            
        console.log("Package Tickets Listening")

        content.innerHTML += ` <div class="person bigSpender"></div>`
    }
})

}