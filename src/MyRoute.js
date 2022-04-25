
import { BrowserRouter,Switch,Route } from "react-router-dom";
import App from "./App"
import AnimeList from "./pages/AnimeList";
import Signin from "./pages/Signin";
import Anime from "./pages/Anime";
import Navbar from "./component/Navbar";
const MyRoute=()=>{
    return(
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/animeList" exact component={AnimeList}/>
                <Route path="/anime" exact component={Anime}/>
            </Switch>
        </BrowserRouter>
    );
}
export default MyRoute;