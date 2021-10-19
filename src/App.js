import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import AllDoctors from './components/AllDoctors/AllDoctors';
import DoctorDetails from './components/DoctorDetails/DoctorDetails';
import Login from './components/Login/Login';
import Register from './components/Register/Register';



function App() {

  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route exact path='/home'>
            <Home></Home>
          </Route>

          <Route exact path='/alldoctors'>
            <AllDoctors></AllDoctors>
          </Route>

          <Route exact path='/alldoctors/:docid'>
            <DoctorDetails></DoctorDetails>
          </Route>

          <Route exact path='/login'>
            <Login></Login>
          </Route>

          <Route exact path='/register'>
            <Register></Register>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
