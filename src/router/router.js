import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn"
import DashBoard from "../pages/DashBoard/DashBoard"
import PositionedPopper from '../Components/Collaborator/SearchPopper';
// import ProtectedRoute from './PotectedRoute';
// import AuthRoute from './AuthRoute';

function Router() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route path="/SignUp" component={SignUp} />
                    <Route path="/DashBoard" component={DashBoard} />
                    {/* <PositionedPopper/> */}

                    {/* <Route path="/DashBoard">   <ProtectedRoute component={DashBoard} />  </Route> */}
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default Router;