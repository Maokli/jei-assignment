import { BrowserRouter as Router, Route, Switch , Redirect} from 'react-router-dom';
import UserPage from "./pages/user-page/user-page";
import HomePage from "./pages/home/home-page";
const App = () => {
    return ( 
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} ></Route>
                <Route path="/users/:id" component={UserPage} ></Route>
            </Switch>
        </Router>
     );
}
 
export default App;