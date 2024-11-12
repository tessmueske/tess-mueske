import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About"

function App() {
  return (
    <Router>
    <div>
      <h1>welcome to tess mueske's portfolio</h1>
      <a href="https://my-period-app.onrender.com/" target="_blank" rel="noopener noreferrer">
        crimson, a non-gendered period tracking application
      </a>
      <p>crimson fills a gap in the menstruation tracking app space. the apps on the market right now use gendered language, either for bodies or for products. this project does not.

        crimson uses a Javascript + React frontend with a fully functional backend incorporating Python with Flask and Flask-SQLAlchemy with a RESTful API routing. it uses Formik for form validations, and it's deployed using render. for secure authentication, the project uses Bcrypt for password hashing.</p>
        <Link to="/about">about tess</Link>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
 );
}


export default App;
