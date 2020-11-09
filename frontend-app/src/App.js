// importing all required functions and packages.
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Login from "./components/pages/Login";
import Contact from "./components/pages/Contact";
import TermsOfServices from "./components/pages/TermsOfServices";
import Privacy from "./components/pages/Privacy";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Survey from "./components/pages/Survey";
import ForgotPass from "./components/pages/ForgotPass";
import Feed from "./components/pages/afterAuthorized/Feed";
import Profile from "./components/pages/afterAuthorized/Profile";
import Appointment from "./components/pages/afterAuthorized/Appointment";
import Chat from "./components/pages/afterAuthorized/Chat/Chat";
import CreatePost from "./components/pages/afterAuthorized/CreatePost";
import EmailSent from "./components/pages/emailsent";
import DeleteUser from "./components/pages/afterAuthorized/DeleteUser";
import DeletedPage from "./components/pages/afterAuthorized/accountdeleted";

// Using router and switch to route the pages from one to another
function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contactus" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/forgotpassword" component={ForgotPass} />
            <Route path="/survey" component={Survey} />
            <Route path="/signup" component={Signup} />
            <Route path="/termsofservices" component={TermsOfServices} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/feed" component={Feed} />
            <Route path="/profile" component={Profile} />
            <Route path="/chat" component={Chat} />
            <Route path="/createpost" component={CreatePost} />
            <Route path="/appointment" component={Appointment} />
            <Route path="/emailsent" component={EmailSent}/>
            <Route path="/deleteuser" component={DeleteUser}/>
            <Route path="/pagedeleted" component={DeletedPage}/>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
