import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Home, About, Projects, Contact } from "./pages"
import VerticalSlider from "./pages/VerticalSlider"

// bg-darkGreen-900

const App = () => {
  return (
	<main className="bg-slate-300/20 w-full h-screen">
		<Router>
			<Navbar/>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/about" element={<About/>}/>
				<Route path="/projects" element={<Projects/>}/>
				<Route path="/contact" element={<Contact/>}/>
			</Routes>
		</Router>
		{/* <VerticalSlider/> */}
	</main>
  )
}

export default App