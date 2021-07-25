import { Router } from "react-router";
import Routes from "./routes";
import history from "./services/history";
import './assets/css/globalStyles.css'

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  )
}

export default App;
