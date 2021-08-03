import Home from "./Home.vue"
import Nav from "./components/Nav.vue"
import Phone from "./components/Phone.vue"
export default{
    routes:[
        {path:"/home",component:Home},
        {path:"/nav",component:Nav},
        {path:"/phone",component:Phone},
        {path:"*",redirect:"/home"}
    ]
}