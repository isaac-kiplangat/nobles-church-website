import Home from "./Pages/HomePage/Home"
import About from "./Pages/About/About"
import Watch from "./Pages/Watch/Watch"
import Ministry from "./Pages/Ministry/Ministry"
import GetInvolved from "./Pages/GetInvolved/GetInvolved"
import Blog from "./Pages/Blog/Blog"
import Give from "./Pages/Give/Give"
import Layout from './Components/Layout/Layout'
import { BrowserRouter as Router,Routes, Route  } from "react-router-dom"


function App() {
  
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route path="/" index element={<Home/>}/>
          <Route path="/about" index element={<About/>}/>
          <Route path="/get-involved" index element={<GetInvolved/>}/>
          <Route path="/ministry" index element={<Ministry/>}/>
          <Route path="/give" index element={<Give/>}/>
          <Route path="/watch" index element={<Watch/>}/>
          <Route path="/blog" index element={<Blog/>}/>
          </Route>
        </Routes>
      </Router>
  )
}

export default App
