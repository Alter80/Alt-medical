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
import AboutUs from './components/About/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import AuthProvider from './context/AuthProvider';
import UsrLoginReg from './components/UserEntry/UsrLoginReg';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';



function App() {

  return (
    <div className="App">
      <AuthProvider>
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

            <PrivateRoute exact path='/alldoctors/:docid'>
              <DoctorDetails></DoctorDetails>
            </PrivateRoute>

            <Route exact path='/login'>
              <UsrLoginReg></UsrLoginReg>
            </Route>

            <Route exact path='/register'>
              <UsrLoginReg></UsrLoginReg>
            </Route>

            <Route exact path='/about'>
              <AboutUs></AboutUs>
            </Route>

            <Route exact path='/contact'>
              <ContactUs></ContactUs>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
