import { Redirect, Route, Switch } from "react-router-dom"
import Home from "../pages"

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Redirect to='/404' />
        </Switch>
    )
}

export default Routes
