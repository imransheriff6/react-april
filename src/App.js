import Card from "./components/card"
import './App.css'
import StateExample from "./components/stateExample"
import ServerCall from "./components/serverCall"
import ClassExample from "./components/classComponent"
import Home from "./components/home"
import About from "./components/about"
import Contact from "./components/contact"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./Redux/store"
import Counter from "./components/counter"

function App() {
  const data = [
    {
      title: "Welcome",
      path: "https://i.stack.imgur.com/vhoa0.jpg",
      population: 1000
    },
    {
      title: "Welcome 1",
      path: "https://png.pngtree.com/thumb_back/fh260/background/20210818/pngtree-night-cartoon-city-background-image_765702.jpg",
      population: 1000
    },
    {
      title: "Welcome 2",
      path: "https://www.shutterstock.com/image-vector/abstract-background-cartoon-cityscape-260nw-761147851.jpg",
      population: 1000
    },
    {
      title: "Welcome 4",
      path: "https://cutewallpaper.org/21/spiderman-city-background/Cartoon-City-3-in-2019-Superhero-theme-party,-Backdrops-.jpg",
      population: 1000
    }
  ]
  const loader = (e) => {
    console.log(e);
    // document.getElementById('iframe_ele').contentWindow.location.reload();
  }
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Routes>
            <Route path="/" element={<ServerCall />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact/:id" element={<Contact />}></Route>
            <Route path="/redux" element={<Counter />}></Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  )

}
export default App