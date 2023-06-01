import { BrowserRouter ,HashRouter,Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import AboutTag from "./Components/Tags/AboutTag";
import ContactTag from "./Components/Tags/ContactTag";
import WorksTag from "./Components/Tags/WorksTag";
import Welcome from "./Components/Welcome";
import Works from "./Components/Works";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <div className="App">
        <Switch>
          <Route path="/about">
            <Header />
            <AboutTag />
            <About />
          </Route>
          <Route path="/work">
            <Header />
            <WorksTag />
            <Works />
          </Route>
            <Route path="/contact">
              <Header />
              <ContactTag />
              <Contact />
            </Route>
          <Route path="/">
            <Header />
            <Welcome />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
