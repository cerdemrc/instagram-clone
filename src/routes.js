import Homepage from "./pages/Homepage"
import DirectMessage from "./pages/DirectMessage"
import Explore from "./pages/Explore"

export const routes = [
   { path: "/", component:Homepage},
   { path: "/direct", component:DirectMessage},
   { path: "/explore", component:Explore}
]