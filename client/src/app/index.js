import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import HomePage from '../pages/HomePage'
import LearnPage from '../pages/LearnPage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import UsersList from '../pages/UsersList'
import UsersInsert from '../pages/UsersInsert'
import ChildInsert from '../pages/ChildInsert'
import ChildUpdate from '../components/ChildUpdate'
import Error404 from '../pages/Error404'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../components/Footer';
// Use BrowserRouter methods to route pages/components
function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/learn" component={LearnPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/users/list" component={UsersList} />
                <Route path="/users/create" component={UsersInsert} />
                <Route path="/child/update" component={ChildUpdate} />
                <Route path="/child/create" component={ChildInsert} />
                <Route component={Error404} />
            </Switch>
            <Footer />
        </Router>
    )
}
export default App