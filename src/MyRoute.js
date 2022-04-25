
import { BrowserRouter,Switch,Route } from "react-router-dom";
import App from "./App"

const MyRoute=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/blogs" exact component={BlogsComponent}/>
            </Switch>
        </BrowserRouter>
    );
}
export default MyRoute;