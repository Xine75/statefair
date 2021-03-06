// Import and invoke the ticket booth component function
import { TicketBooth } from "./TicketBooth.js"
import { RideTicketHolders } from "./rides/RideTicketHolders.js"
import { FoodTicketHolders } from "./food/FoodTicketHolder.js"
import { GameTicketHolders } from "./games/GameTicketHolder.js"
import { SideshowTicketHolder } from "./sideshows/SideShowTicketHolder.js"
import { PackageTicketHolders } from "./PackageTicketHolder.js"
import { TicketCounter } from "./TicketCounter.js"
TicketBooth()
RideTicketHolders()
FoodTicketHolders()
GameTicketHolders()
SideshowTicketHolder()
PackageTicketHolders()
TicketCounter()
