import { useState } from 'react'
import { useTheme } from './context/useTheme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
	const { theme } = useTheme();
	const isSidebarTheme = theme === 'theme2';
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<Router>
			<div className={`min-h-screen ${theme}`}>
				<Header 
					isMobileMenuOpen={isMobileMenuOpen}
					setIsMobileMenuOpen={setIsMobileMenuOpen}
				/>
				<div className={`flex ${isSidebarTheme ? '' : 'flex-col'}`}>
				<Sidebar 
					isSidebarTheme={isSidebarTheme} 
					isMobileMenuOpen={isMobileMenuOpen}
					setIsMobileMenuOpen={setIsMobileMenuOpen}
				/>
				<main className='flex-1 px-4 py-40 md:py-18'>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</main>
				</div>
			</div>
		</Router>
	)
}

export default App
