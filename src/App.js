import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import DoctorDetail from './Pages/Doctors/Doctor/DoctorDetail/DoctorDetail';
import Doctors from './Pages/Doctors/Doctors';
import ServiceDetail from './Pages/Services/ServiceDetail/ServiceDetail';
import Services from './Pages/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Authprovider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Registration from './Pages/Login/Registration/Registration';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
function App() {
  return (
    <div className="App">
      <Router>
        <Authprovider>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/doctor/:doctorId">
              <DoctorDetail></DoctorDetail>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Registration></Registration>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Authprovider>
      </Router>
    </div>
  );
}

export default App;
