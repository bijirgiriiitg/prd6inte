import './App.css';
import Sidebar from './components/prd6/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Overview from './pages/prd6/Overview';
import { ReportsOne, ReportsTwo, ReportsThree, ReportsFour } from './pages/prd6/Reports';
//import Team from './pages/prd6/Team';
//import Apkk from "./pages/prd6/unlock";
//import Appk from "./pages/prd6/food";
function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/reports/reports4' exact component={ReportsFour} />
      </Switch>
    </Router>
  );
}

export default App;
