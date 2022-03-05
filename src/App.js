import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import ListVehiclesComp from './components/ListVehiclesComp';
import AddVehiclesComp from './components/AddVehiclesComp';
function App() {
    return (
        <div>
            <Router>
                    <HeaderComp/>
                        <div className="container">
                        <Switch> 
                            <Route path="/" exact component={ListVehiclesComp}></Route>
                        <Route path="/vehicles" component={ListVehiclesComp}></Route>
                        <Route path="/add" component={AddVehiclesComp}></Route>
                        </Switch>
                        </div>
                    <FooterComp />
            </Router>
        </div>
  );
}

export default App;
